/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from "mongoose";
import { CartModel } from "../cart/cart.model";
import { VendorModel } from "../vendor/vendor.model";
import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";
import { User } from "../user/user.model";
import Stripe from "stripe";
import config from "../../config";
import { OrderModel } from "../order/order.model";
import { uploadFile } from "../uploadFile/awsUpload";
import { Express } from "express";
import { AppError } from "../../errors/AppError";
import httpStatus from "http-status";

const stripe = new Stripe(config.stripe_secret_key as string);

const createProduct = async (
  payload: IProduct,
  userId: Types.ObjectId,
  thumbnail: Express.Multer.File,
  productFile: Express.Multer.File
) => {
  const vendorId = await VendorModel.findOne({ user: userId });

  if (!vendorId?.commissionPercentage) {
    return {
      profile_not_update: true,
    };
  }
  const thumbnailUpload = await uploadFile(thumbnail, "product");
  const fileUpload = await uploadFile(productFile, "product");
  const product = await new ProductModel({
    productName: payload.productName,
    description: payload.description,
    category: payload.category,
    vendorCountryLocation: payload.vendorCountryLocation,
    vendor: vendorId._id,
    thumbnail: thumbnailUpload.Location,
    file: fileUpload.Location,
    price: payload.price,
    tags: payload.tags,
  }).save();
  await vendorId.updateOne({ $push: { products: product._id } });
  return { product };
};

const getProductsByCategory = async (
  category: Record<string, unknown>,
  page: number,
  limit: number
) => {
  const skip = !page ? 0 : limit * page;
  const query: Record<string, unknown> = { status: "Approved" };

  if (category?.category) {
    const decodedCategory = decodeURIComponent(category?.category as string);

    query.category = decodedCategory;
  }

  const products = await ProductModel.find(query)
    .limit(limit)
    .skip(skip)
    .populate({
      path: "vendor",
      populate: {
        path: "user",
      },
    });

  return products;
};

// cart related function

const addProductToCart = async (productId: Types.ObjectId, userId: string) => {
  let cartExist = await CartModel.findOne({ user: userId });
  // If cart doesn't exist, create a new one
  if (!cartExist) {
    cartExist = await CartModel.create({ user: userId, products: [] });

    //here updating the user that this cartId belong from which user
    await User.findByIdAndUpdate(cartExist.user, {
      cart: cartExist._id,
    });
  }
  // Check if the product already exists in the cart
  const productIndex = cartExist.products.indexOf(productId);
  // console.log(productIndex);
  if (productIndex === -1) {
    // Product doesn't exist, add it to the cart
    cartExist.products.push(productId);
    await cartExist.save();
    await User.findByIdAndUpdate(cartExist.user, {
      cart: cartExist._id,
    });
    return { cartExist };
  } else {
    return { cartDuplicate: true };
  }
};

const getCartProducts = async (userId: Types.ObjectId) => {
  const cart = await CartModel.findOne({ userId }).populate("products");
  return cart;
};

const updateProductCategory = async (productId: string, category: string) => {
  const isProductExists = await ProductModel.findById(productId);

  if (!isProductExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Product Not Found");
  }

  const result = await ProductModel.findByIdAndUpdate(productId, {
    category: category,
  });

  return result;
};

// delete the cart
// const deleteCart = async (cartItemId: Types.ObjectId) => {

// }

// buy product related function

const buyProductPaymentIntend = async (userId: string, productId: string) => {
  const product = await ProductModel.findById(productId).select(
    "thumbnail productName price _id"
  );
  const customer = await stripe.customers.create({
    metadata: {
      product: JSON.stringify(product),
      userId: JSON.stringify(userId),
    },
  });

  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product?.productName,
            images: [product?.thumbnail],
          },
          unit_amount: product?.price * 100,
        },
        quantity: 1,
      },
    ],
    customer: customer.id,
    mode: "payment",
    success_url: "http://localhost:5000/payment-success",
    cancel_url: "http://localhost:5000/payment-cancel",
  });

  return session;
};

let endpointSecret: string;
if (config.stripe_endpoing_secret) {
  endpointSecret = config.stripe_endpoing_secret;
}
const stripeHook = async (body: any, sig: string) => {
  let data;
  let eventType;
  if (endpointSecret) {
    const event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    data = event.data.object;
    eventType = event.type;
  } else {
    data = body.data.object;
    eventType = body.type;
  }

  if (eventType === "checkout.session.completed") {
    const customerInfo: any = await stripe.customers.retrieve(data.customer);
    const userId = JSON.parse(customerInfo.metadata.userId);
    const product = JSON.parse(customerInfo.metadata.product);
    // console.log({ userId: userId, productId: product });
    const order = await OrderModel.create({
      user: userId,
      product: product._id,
      paymentStatus: data.payment_status,
      orderStatus: "Delivered",
    });
    await User.findByIdAndUpdate(order.user, {
      $push: { buyedProducts: order._id },
    });

    const vendor = await VendorModel.findById(product?.vendor);
    if (!vendor) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        "Vendor not found: stripeHook()"
      );
    }

    const vendorEarning = product.price / vendor?.commissionPercentage;

    await VendorModel.findByIdAndUpdate(product?.vendor, {
      $push: { soldProducts: order._id },
      wallet: vendorEarning,
    });
  }
};

export const ProductServices = {
  createProduct,
  getProductsByCategory,

  // cart related function export
  addProductToCart,
  getCartProducts,
  updateProductCategory,

  // buy product related function export
  buyProductPaymentIntend,
  stripeHook,
};
