import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { FeaturedServices } from "./Featured.service";

const addFeaturedProduct = catchAsync(async (req, res) => {
  const productId = req.params.productId;

  const result = await FeaturedServices.addFeaturedProduct(productId);

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Featured Product added",
    data: result,
  });
});

const getFeaturedProduct = catchAsync(async (req, res) => {
  const result = await FeaturedServices.getFeaturedProduct();

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Featured retrieved successfully",
    data: result,
  });
});

const deleteFeaturedProduct = catchAsync(async (req, res) => {
  const featuredId = req.params.featuredId;

  console.log(featuredId);

  const result = await FeaturedServices.deleteFeaturedProduct(featuredId);

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Featured product removed successfully",
    data: result,
  });
});

export const FeaturedControllers = {
  addFeaturedProduct,
  getFeaturedProduct,
  deleteFeaturedProduct,
};
