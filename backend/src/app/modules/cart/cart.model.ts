import { Schema, model } from "mongoose";
import { ICart } from "./cart.interface";




const cartSchema = new Schema<ICart>({
  products: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref:'product'
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref:'user'
  },
},{timestamps:true});

export const CartModel = model<ICart>("cart", cartSchema);

