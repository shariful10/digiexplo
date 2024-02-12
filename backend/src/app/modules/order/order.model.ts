import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";



const orderSchema = new Schema<IOrder>({
  product: Schema.Types.ObjectId,
  user: Schema.Types.ObjectId,
  orderStatus: {
    type: String,
    enum: ['Pending',"Delivered"],
    default:'Pending'
  },
  paymentStatus: {
    type: String,
    enum : ['pending',"paid"],
    default: 'pending'
  }
});

export const OrderModel = model<IOrder>("order", orderSchema);
