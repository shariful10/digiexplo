import { Types } from "mongoose";

export interface ICartProduct {
    productId: Types.ObjectId
    quantity : number
}

export interface ICart {
    userId: Types.ObjectId
    products: ICartProduct[]
}