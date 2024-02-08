import { VendorModel } from "../vendor/vendor.model";
import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";



const createProdcut = async (payload:IProduct,vendorId:string) => {
    const product = await new ProductModel({
        productName: payload.productName,
        description: payload.description,
        category: payload.category,
        vendorContryLocation: payload.vendorCountryLocation,
        vendor: vendorId,
        thumbnail: payload.thumbnail,
        file:payload.file,
        price: payload.price,
        tags: payload.tags
    }).save()
    await VendorModel.findByIdAndUpdate(vendorId,{
        products:[
            product.id
        ]
    })
    return product
}


export const ProductServices = {
    createProdcut,
}