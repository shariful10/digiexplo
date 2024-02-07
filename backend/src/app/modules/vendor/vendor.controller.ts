import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { VendorServices } from "./vendor.service";
import catchAsync from "../../utils/catchAsync";
import { Types } from "mongoose";

const becomeVendor = catchAsync(async (req, res) => {
  const userId = req.params.userId as unknown as Types.ObjectId;
  const result = await VendorServices.becomeVendor(userId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Become Vendor request was sent successfully",
    data: result,
  });
});




export const VendorController = {
  becomeVendor,
};
