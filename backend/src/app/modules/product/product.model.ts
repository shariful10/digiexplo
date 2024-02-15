
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
    vendorCountryLocation: {
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

    status:{
        type : String,
        enum : ["Pending" , "Approved" , "Reject"],
        default: "Pending"
    },
    slug: {
        type:String
    },
    "meta-tigle":{
        type:String
    },
    vendor: {
        type: Schema.Types.ObjectId,
        ref:'Vendor',
    },
},{timestamps:true})

export const ProductModel = model <IProduct>('product',ProductSchema)




