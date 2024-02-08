import { Schema, model } from "mongoose";
import { IVendor } from "./vendor.interface";



const VendorSchema = new Schema <IVendor>({
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "user ID is required"],
    ref:"User",
    unique:true
  },
  companyName: { type: String, required: true },
  ownerName: { type: String, required: true },
  website: { type: String },
  verificationId: { type: String, required: true },
  address: { type: String, required: true },
  status: {
    type:String,
    enum : ['Approved',"Pending","Cancel","Restrict"],
    default:"Pending"
  },
  products: [
    {
      type:  Schema.Types.ObjectId,
      ref: 'product',
      unique:true
    }
  ]
});

export const VendorModel = model<IVendor>("Vendor", VendorSchema);
