import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";
import { Types } from "mongoose";
import { Express } from "express";
// import { VendorModel } from "../vendor/vendor.model";

// const createProduct = catchAsync(async (req, res) => {
//   const file = req.files as { [fieldname: string]: Express.Multer.File[] };
//   const thumbnail = file?.thumbnail[0];
//   const productFile = file?.file[0];
//   const vendorId = req.user._id;
//   const { product, profile_not_update } = await ProductServices.createProduct(
//     req.body,
//     vendorId,
//     thumbnail,
//     productFile
//   );
//   if (profile_not_update) {
//     return sendResponse(res, {
//       data: null,
//       statusCode: httpStatus.FORBIDDEN,
//       success: false,
//       message: "profile not updated",
//     });
//   }
//   return sendResponse(res, {
//     data: product,
//     statusCode: httpStatus.CREATED,
//     success: true,
//     message: "product created successfully let admin to approve it",
//   });
// });

const createProduct = catchAsync(async (req, res) => {
  const file = req.files as { [fieldname: string]: Express.Multer.File[] };
  const thumbnail = file?.thumbnail[0];
  const productFile = file?.file[0];

  const userId = req.user._id;

  const { product, profile_not_update } = await ProductServices.createProduct(
    req.body,
    userId,
    thumbnail,
    productFile
  );
  if (profile_not_update) {
    return sendResponse(res, {
      data: null,
      statusCode: httpStatus.FORBIDDEN,
      success: false,
      message: "profile not updated",
    });
  }
  return sendResponse(res, {
    data: product,
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Success: Waiting Admin Approval",
  });
});

const getProductsByCategory = catchAsync(async (req, res) => {
  const category = req.query;
  const { page, limit } = req.query;
  const products = await ProductServices.getProductsByCategory(
    category,
    Number(page),
    Number(limit)
  );
  sendResponse(res, {
    data: products,
    statusCode: httpStatus.OK,
    success: true,
    message: "category wise products get successful ",
  });
});

//cart related function
const addProductToCart = catchAsync(async (req, res) => {
  const productId = req.params.productId as unknown as Types.ObjectId;
  const userId = req.user._id;
  const { cartExist, cartDuplicate } = await ProductServices.addProductToCart(
    productId,
    userId
  );

  if (cartDuplicate) {
    return sendResponse(res, {
      data: cartExist,
      statusCode: httpStatus.OK,
      success: false,
      message: "product already added",
    });
  }

  sendResponse(res, {
    data: cartExist,
    statusCode: httpStatus.OK,
    success: true,
    message: "product added into cart",
  });
});

const getCartProducts = catchAsync(async (req, res) => {
  const userId = req.user._id;
  const cart = await ProductServices.getCartProducts(userId);

  sendResponse(res, {
    data: cart,
    statusCode: httpStatus.OK,
    success: true,
    message: "cart get successful",
  });
});

// product buy related function

const buyProductPaymentIntend = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const productId = req.params.productId;
  const session = await ProductServices.buyProductPaymentIntend(
    userId,
    productId
  );
  // sendResponse(res,{
  //     statusCode:httpStatus.OK,
  //     success:true,
  //     data:sessionId,
  //     message:'session id get successfull'
  // })
  res.json({
    url: session.url,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const stripeHook = catchAsync(async (req, res) => {
  const sig = req.headers["stripe-signature"] as unknown as string;
  console.log(sig);
  const body = req.body;
  await ProductServices.stripeHook(body, sig);
});

export const ProductControllers = {
  createProduct,
  getProductsByCategory,
  // cart related function
  addProductToCart,
  getCartProducts,

  // product by related function
  buyProductPaymentIntend,
  stripeHook,
};
