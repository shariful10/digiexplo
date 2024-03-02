import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { VendorServices } from "./vendor.service";
import catchAsync from "../../utils/catchAsync";
import { AppError } from "../../errors/AppError";
import { Express } from "express";

const becomeVendor = catchAsync(async (req, res) => {
  const verificationImg = req.file as Express.Multer.File;
  const userId = req.user?.id;

  if (!userId) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      "You are not authorized to perform this action"
    );
  }
  const { create, vendor_pending } = await VendorServices.becomeVendor(
    userId,
    req.body,
    verificationImg
  );

  // if(vendor_exist) {
  //   return  sendResponse(res, {
  //     statusCode: httpStatus.CONFLICT,
  //     success: true,
  //     message: "vendor already exist",
  //     data: null,
  //   });
  // }
  if (vendor_pending) {
    return sendResponse(res, {
      statusCode: httpStatus.CONFLICT,
      success: true,
      message: "You have already applly your application is on processing",
      data: null,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Become Vendor request was sent successfully",
    data: create,
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

const updateVendorCommission = catchAsync(async (req, res) => {
  const vendorId = req.params.vendorId;

  const result = await VendorServices.updateVendorCommission(
    vendorId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Vendor Commission Updated",
    data: result,
  });
});

export const VendorController = {
  becomeVendor,
  getVendor,
  updateVendorCommission,
};
