import { VendorModel } from "../vendor/vendor.model";
import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";



const createProdcut = async (payload:IProduct,vendorId:string) => {
    const product = await new ProductModel({
        productName: payload.productName,
        description: payload.description,
        category: payload.category,
        vendorCountryLocation: payload.vendorCountryLocation,
        vendor: vendorId,
        thumbnail: payload.thumbnail,
        file:payload.file,
        price: payload.price,
        tags: payload.tags
    }).save()

    return product
}



// cart related function

const addProductToCart = async(productId:string,quantity:number) =>{
    
}

export const ProductServices = {
    createProdcut,
    addProductToCart
}