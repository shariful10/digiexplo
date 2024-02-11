import { Types } from "mongoose";

export type TCartProduct =  Types.ObjectId


export interface ICart {
    user: Types.ObjectId
    products: TCartProduct[]
}