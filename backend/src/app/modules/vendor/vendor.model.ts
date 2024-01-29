import { Schema, model } from "mongoose";
import { IVendor } from "./vendor.interface";

const VendorSchema = new Schema<IVendor>({
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "user ID is required"],
  },
  companyName: { type: String, required: true },
  ownerName: { type: String, required: true },
  website: { type: String },
  verificationId: { type: String, required: true },
  addresses: { type: String, required: true },
});

export const VendorModel = model<IVendor>("Vendor", VendorSchema);
