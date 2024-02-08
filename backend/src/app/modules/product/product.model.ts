
import { Types,Schema, model } from "mongoose"
import { IProduct } from "./product.interface"



const ProductSchema = new Schema<IProduct>({
    productName: {
        type:String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    vendorContryLocation: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    thumbnail: {
        type: String,
        required:true
    },
    tags: [String],
    file: {
        type: String,
        required:true
    },
    category: {
        type:String,
        required: true
    },
    vendor: {
        type: Schema.Types.ObjectId,
        ref:'Vendor'
    },
    slug: {
        type:String
    },
    "meta-tigle":{
        type:String
    }

})

export const ProductModel = model <IProduct>('product',ProductSchema)




