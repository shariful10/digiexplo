import { Types } from "mongoose";


export interface IVendor {
  user: Types.ObjectId;
  companyName: string;
  ownerName: string;
  website: string;
  verificationId: string;
  address: string;
  status?: "Pending" | "Approved" | "Cancel" | "Restrict";
  products: Types.ObjectId[],
  soldProducts? : Types.ObjectId[],
  wallet?: number
  commissionPercentage: number
}
