import { Types } from "mongoose";

export interface IVendor {
  user: Types.ObjectId;
  companyName: string;
  ownerName: string;
  website: string;
  verificationId: string;
  addresses: string;
  status?: "Pending" | "Approved";
}
