import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AdminServices } from "./admin.service";

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

const acceptVendorRequest = catchAsync(async(req,res)=> {
    const {vendorId} = req.params;
    const accept = await AdminServices.acceptVendorRequest(vendorId)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        data:accept,
        success:true,
        message:'Vendor request has been accepted'
    })
})

// product related function

const getPendingProducts = catchAsync(async (req,res)=> {
  const { page, limit } = req.query;
  const pendingProducts = await AdminServices.getPendingProducts(Number(page),Number(limit))
  sendResponse(res,{
    statusCode:httpStatus.OK,
    data:pendingProducts,
    success:true,
    message:' product get successfull '
})
})

const updateProductStatus = catchAsync(async (req,res)=> {
  const {productId} = req.params
  const {productStatus} = req.body
  const updatedProduct = await AdminServices.updateProductStatus(productId, productStatus )
  sendResponse(res,{
    statusCode: httpStatus.OK,
    data: updatedProduct,
    success: true,
    message: 'product update successfull'
  })
})

export const AdminController = {
    getPendingVendorRequest,
  acceptVendorRequest,

  // product related function
  getPendingProducts,
  updateProductStatus
};
