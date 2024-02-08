import { Types } from "mongoose";
import { IProduct } from "../product/product.interface";

export interface IVendor {
  user: Types.ObjectId;
  companyName: string;
  ownerName: string;
  website: string;
  verificationId: string;
  address: string;
  status?: "Pending" | "Approved" | "Cancel" | "Restrict";
  products: IProduct[]
}
