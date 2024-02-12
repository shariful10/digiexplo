import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service"
import { Types } from "mongoose";



const createProduct = catchAsync(async (req,res)=> {
    const vendorId = req.user.vendor;
    const product = await ProductServices.createProduct(req.body,vendorId)

    sendResponse(res,{
        data:product,
        statusCode:httpStatus.CREATED,
        success:true,
        message:'product created successfull let admin it to approve '
    })
})


const getProductsByCategory = catchAsync(async (req,res)=> {
    const category = req.params.category as unknown as string;
    const {page,limit} = req.query
    const products = await ProductServices.getProductsByCategory(category,Number(page),Number(limit))
    sendResponse(res,{
        data:products,
        statusCode:httpStatus.OK,
        success:true,
        message:'category wise products get successfull '
    })
})


//cart related function
const addProductToCart  = catchAsync(async (req,res)=> {
    const productId  = req.params.productId as unknown as Types.ObjectId
    const userId = req.user._id
    const cartAdded = await ProductServices.addProductToCart(productId,userId)

    sendResponse(res, {
        data:cartAdded,
        statusCode:httpStatus.OK,
        success: true,
        message: "product added into cart"
    })

})


const getCartProducts = catchAsync(async (req,res)=> {
    const userId = req.user._id;
    const cart = await ProductServices.getCartProducts(userId)

    sendResponse(res, {
        data:cart,
        statusCode:httpStatus.OK,
        success:true,
        message:'cart get successfull'
    })
})





// product buy related function


const buyProductPaymentIntend = catchAsync(async (req,res)=> {
    const userId = req.user._id;
    const productId = req.params.productId
    const session = await ProductServices.buyProductPaymentIntend(userId,productId)
    // sendResponse(res,{
    //     statusCode:httpStatus.OK,
    //     success:true,
    //     data:sessionId,
    //     message:'session id get successfull'
    // })
    res.json({
        url:session.url
    })
})


const stripeHook = catchAsync(async (req,res)=> {
    const sig = req.headers['stripe-signature'] as unknown as string;
    const body = req.body;
    await ProductServices.stripeHook(body,sig)
})



export const ProductControllers = {
    createProduct,
    getProductsByCategory,
    // cart related function
    addProductToCart,
    getCartProducts,


    // product by related function
    buyProductPaymentIntend,
    stripeHook
}