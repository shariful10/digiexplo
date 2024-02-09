import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service"



const createProduct = catchAsync(async (req,res)=> {
    const vendorId = req.user.vendor;
    const product = await ProductServices.createProdcut(req.body,vendorId)

    sendResponse(res,{
        data:product,
        statusCode:httpStatus.CREATED,
        success:true,
        message:'product created successfull let admin it to approve '
    })
})

const addProductToCart  = catchAsync(async (req,res)=> {
    const productId = req.params

})

export const ProductControllers = {
    createProduct,

    // cart related function
    addProductToCart
}