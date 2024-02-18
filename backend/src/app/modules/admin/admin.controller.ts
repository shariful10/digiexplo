import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AdminServices } from "./admin.service";
import { VendorModel } from "../vendor/vendor.model";

// vendor related function

const getPendingVendorRequest = catchAsync(async (req, res) => {
  const { page, limit } = req.query;
  const vendors = await AdminServices.getPendingVendorRequest(
    Number(page),
    Number(limit)
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Vendors request list",
    data: vendors,
  });
});

const updateVendorRequest = catchAsync(async (req, res) => {
  const { vendorId } = req.params;
  const { status } = req.body;
  const {cancel,update} = await AdminServices.updateVendorRequest(
    vendorId,
    status
  );
  if (update) {
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      data: update,
      success: true,
      message: "Vendor request has been updated",
    });
  }
  if (cancel) {
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      data: update,
      success: true,
      message: "Vendor request has been updated",
    });
  }
});

const updateVendorProfile = catchAsync(async (req, res) => {
  const { vendorId } = req.params;
  const body = req.body;
  const update = await AdminServices.updateVendorProfile(vendorId, body);
  sendResponse(res, {
    data: update,
    statusCode: httpStatus.OK,
    success: true,
    message: "profile update successfull",
  });
});

// product related function

const getPendingProducts = catchAsync(async (req, res) => {
  const { page, limit } = req.query;
  const pendingProducts = await AdminServices.getPendingProducts(
    Number(page),
    Number(limit)
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    data: pendingProducts,
    success: true,
    message: " product get successfull ",
  });
});

const updateProductStatus = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const { productStatus } = req.body;
  const updatedProduct = await AdminServices.updateProductStatus(
    productId,
    productStatus
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    data: updatedProduct,
    success: true,
    message: "product update successfull",
  });
});

export const AdminController = {
  getPendingVendorRequest,
  updateVendorRequest,
  updateVendorProfile,

  // product related function
  getPendingProducts,
  updateProductStatus,
};
