import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { CategoryModel } from "./category.model";
import { ICategory } from "./category.interface";

const createCategory = async (payload: ICategory) => {
  const isCategoryExist = await CategoryModel.findOne({ title: payload.title });

  if (isCategoryExist) {
    throw new AppError(httpStatus.CONFLICT, "Category already exists");
  }

  const result = await CategoryModel.create(payload);

  return result;
};

const deleteCategory = async (payload: string) => {
  const isCategoryExist = await CategoryModel.findById(payload);

  if (!isCategoryExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Category doesn't exists");
  }

  const result = await CategoryModel.findByIdAndDelete(payload);

  return result;
};

export const CategoryServices = { createCategory, deleteCategory };
