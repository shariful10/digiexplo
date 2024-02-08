import catchAsync from "../../utils/catchAsync"
import { ProductServices } from "./product.service"



const createProduct = catchAsync(async (req,res)=> {
    const product = await ProductServices.createProdcut(req.body)
})


export const ProductControllers = {
    createProduct
}