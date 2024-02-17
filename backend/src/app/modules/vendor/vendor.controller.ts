import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { VendorServices } from "./vendor.service";
import catchAsync from "../../utils/catchAsync";
import { Types } from "mongoose";
import { AppError } from "../../errors/AppError";
import { Express } from "express";

const becomeVendor = catchAsync(async (req, res) => {
  const verificationImg = req.file as Express.Multer.File;
  const userId = req.params.userId as unknown as Types.ObjectId;

  console.log("req user", req.user);

  if (userId !== req.user._id) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      "You are not authorized to perform this action"
    );
  }
  const result = await VendorServices.becomeVendor(
    userId,
    req.body,
    verificationImg
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Become Vendor request was sent successfully",
    data: result,
  });
});

const getVendor = catchAsync(async (req, res) => {
  const { vendorId } = req.params;
  const vendor = await VendorServices.getVendor(vendorId);
  sendResponse(res, {
    data: vendor,
    statusCode: httpStatus.OK,
    success: true,
    message: "get vendor successful",
  });
});

export const VendorController = {
  becomeVendor,
  getVendor,
};
