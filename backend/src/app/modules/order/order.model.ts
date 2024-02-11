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
    enum : ['Pending',"Paid"],
    default: 'Pending'
  }
});

export const orderModel = model<IOrder>("order", orderSchema);
