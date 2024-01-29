import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { VendorServices } from "./vendor.service";
import catchAsync from "../../utils/catchAsync";

const becomeVendor = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const result = await VendorServices.becomeVendor(userId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Become Vendor request was sent successfully",
    data: result,
  });
});

export const VendorController = {
  becomeVendor,
};
