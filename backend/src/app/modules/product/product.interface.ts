import { Types } from "mongoose";

type TProductStatus = "Pending" | "Approved" | "Reject";

export interface IProduct {
  productName: string;
  description: string;
  vendorCountryLocation: string;
  category: string;
  price: number;
  thumbnail: string;
  vendor: Types.ObjectId;
  file: string;
  tags: string[];
  status: TProductStatus;
  // for seo
  slug?: string;
  "meta-title"?: string;
}
