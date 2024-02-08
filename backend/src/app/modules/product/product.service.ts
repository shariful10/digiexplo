import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";



const createProdcut = async (payload:IProduct) => {
    const product = new ProductModel({
        
    })
}


export const ProductServices = {
    createProdcut,
}