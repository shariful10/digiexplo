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

const updateCategory = catchAsync(async (req, res) => {
  const categoryId = req.params.categoryId;

  console.log("category", req.body);

  const result = await CategoryServices.updateCategory(categoryId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category Updated successfully",
    data: result,
  });
});

const deleteCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;

  const result = await CategoryServices.deleteCategory(categoryId);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Category Deleted successfully",
    data: result,
  });
});

export const CategoryControllers = {
  createCategory,
  updateCategory,
  deleteCategory,
};
