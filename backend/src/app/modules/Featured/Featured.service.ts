import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { ProductModel } from "../product/product.model";
import { FeaturedModel } from "./Featured.model";

const addFeaturedProduct = async (productId: string) => {
  const isProductExists = await ProductModel.findById(productId);

  if (!isProductExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }

  const result = await FeaturedModel.create({ product: productId });

  return result;
};

const getFeaturedProduct = async () => {
  const result = await FeaturedModel.find().populate({
    path: "product",
    populate: { path: "vendor" },
  });

  return result;
};

const deleteFeaturedProduct = async (featuredId: string) => {
  const isProductExists = await FeaturedModel.findById(featuredId);

  if (!isProductExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }

  const result = await FeaturedModel.findByIdAndDelete(featuredId);

  return result;
};

export const FeaturedServices = {
  addFeaturedProduct,
  getFeaturedProduct,
  deleteFeaturedProduct,
};
