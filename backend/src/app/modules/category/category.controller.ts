import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { CategoryServices } from "./category.service";
import sendResponse from "../../utils/sendResponse";

const createCategory = catchAsync(async (req, res) => {
  // console.log(req.body);

  const result = await CategoryServices.createCategory(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Category Created successfully",
    data: result,
  });
});

const deleteCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;

  console.log(categoryId);
  const result = await CategoryServices.deleteCategory(categoryId);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Category Deleted successfully",
    data: result,
  });
});

export const CategoryControllers = { createCategory, deleteCategory };
