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

const stripe = new Stripe(config.stripe_secret_key as string);

const createProduct = async (
  payload: IProduct,
  vendorId: string,
  thumbnail: Express.Multer.File,
  productFile: Express.Multer.File
) => {
  const findVendor = await VendorModel.findById(vendorId);
  console.log(vendorId);
  if (!findVendor?.commissionPercentage) {
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
    vendor: vendorId,
    thumbnail: thumbnailUpload.Location,
    file: fileUpload.Location,
    price: payload.price,
    tags: payload.tags,
  }).save();
  await findVendor.updateOne({ $push: { products: product._id } });
  return { product };
};

const getProductsByCategory = async (
  category: string,
  page: number,
  limit: number
) => {
  const skip = !page ? 0 : limit * page;
  const products = await ProductModel.find({ category })
    .limit(limit)
    .skip(skip);
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
  if (productIndex === -1) {
    // Product doesn't exist, add it to the cart
    cartExist.products.push(productId);
    await cartExist.save();
    await User.findByIdAndUpdate(cartExist.user, {
      cart: cartExist._id,
    });
    return cartExist;
  } else {
    return cartExist;
  }
};

const getCartProducts = async (userId: Types.ObjectId) => {
  const cart = await CartModel.findOne({ userId }).populate("products");
  return cart;
};

// buy product related function

const buyProductPaymentIntend = async (userId: string, productId: string) => {
  const product = await ProductModel.findById(productId);
  const customer = await stripe.customers.create({
    metadata: {
      product: JSON.stringify(product),
      userId,
    },
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Samsung mobile",
            images: ["http://localhost:5000/one.jpg"],
          },
          unit_amount: 10 * 100,
        },
        quantity: 1,
      },
    ],
    customer: customer.id,
    mode: "payment",
    success_url: "http://localhost:5000/index.html",
    cancel_url: "http://localhost:5000/index.html",
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
    let event;
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    data = event.data.object;
    eventType = event.type;
  } else {
    data = body.data.object;
    eventType = body.type;
  }

  if (eventType === "checkout.session.completed") {
    const customerInfo: any = await stripe.customers.retrieve(data.customer);
    let userId = customerInfo.metadata.userId;
    const product = JSON.parse(customerInfo.metadata.product);
    const order = await OrderModel.create({
      user: userId,
      product: product._id,
      paymentStatus: data.payment_status,
      orderStatus: "Delivered",
    });
    await User.findByIdAndUpdate(order.user, {
      $push: { buyedProducts: order._id },
    });
    // await VendorModel.findByIdAndUpdate
  }
};

export const ProductServices = {
  createProduct,
  getProductsByCategory,

  // cart related function export
  addProductToCart,
  getCartProducts,

  // buy product related function export
  buyProductPaymentIntend,
  stripeHook,
};
