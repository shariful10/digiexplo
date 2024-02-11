import { Types } from "mongoose";



export interface IOrder {
    user: Types.ObjectId,
    product : Types.ObjectId,
    orderStatus: string,
    paymentStatus: string

}