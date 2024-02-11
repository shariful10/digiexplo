import { Types } from "mongoose";
import { CartModel } from "../cart/cart.model";
import { VendorModel } from "../vendor/vendor.model";
import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";
import { User } from "../user/user.model";

import Stripe from 'stripe';
import config from "../../config";

const stripe = new Stripe(config.stripe_secret_key as string)


const createProduct = async (payload:IProduct,vendorId:string) => {
    const product = await new ProductModel({
        productName: payload.productName,
        description: payload.description,
        category: payload.category,
        vendorCountryLocation: payload.vendorCountryLocation,
        vendor: vendorId,
        thumbnail: payload.thumbnail,
        file:payload.file,
        price: payload.price,
        tags: payload.tags
    }).save()

    return product
}



// cart related function

const addProductToCart = async(productId:  Types.ObjectId ,userId:string) =>{
    let cartExist = await CartModel.findOne({ user:userId });
    // If cart doesn't exist, create a new one
    if (!cartExist) {
        cartExist = await CartModel.create({ user:userId, products: [] });

        //here updating the user that this cartId belong from which user
        await User.findByIdAndUpdate(cartExist.user,{
            cart:cartExist._id
        })
    }
    // Check if the product already exists in the cart
    const productIndex = cartExist.products.indexOf(productId);
    if (productIndex === -1) {
        // Product doesn't exist, add it to the cart
        cartExist.products.push(productId);
        await cartExist.save();
        await User.findByIdAndUpdate(cartExist.user,{
            cart:cartExist._id
        })
        return cartExist
    } else {
        return cartExist
    }
}


const getCartProducts = async(userId: Types.ObjectId) => {
    const cart = await CartModel.findOne({userId}).populate('products')
    return cart
}



// buy product related function

const buyProductPaymentIntend = async (userId: string, productId:string) => {
const product = await ProductModel.findById(productId);
// console.log(product)
const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Samsung mobile",
            images: ["http://localhost:5000/one.jpg"]
          },
          unit_amount: 10 * 100,
        },
        quantity: 1,
      },
    ],
    // customer: customer.id,
    mode: "payment",
    success_url: "http://localhost:5000/success.html",
    cancel_url: "http://localhost:5000/success.html",
  });
  return session.id
}


export const ProductServices = {
    createProduct,

    // cart related function export
    addProductToCart,
    getCartProducts,


    // buy product related function export
    buyProductPaymentIntend

}