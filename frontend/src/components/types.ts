import { ChangeEvent } from "react";

export interface OrderItemsProps {
  data: {
    id: number;
    tableTitle: string;
    productImage: string;
    productTitle: string;
    vendorName: string;
    price: number;
    date: string;
  }[];
}

export interface IUser {
  _id: string;
  lastName: string;
  firstName: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  profileImg: string;
  // verificationID?: string;
  role: string;
  status: string;
  isDeleted: boolean;
  vendor: string;
  cart: string;
  buyedProducts: [];
}

export interface ICart {
  user: string;
  products: [];
}

export interface CategoryType {
  _id: string;
  title: string;
}

export interface IVendor {
  _id: string;
  user: IUser;
  companyName: string;
  ownerName: string;
  website: string;
  verificationId: string;
  address: string;
  status?: string;
  products: string[];
  soldProducts?: string[];
  wallet?: number;
  commissionPercentage: number;
}

export interface IProduct {
  _id: string;
  productName: string;
  description: string;
  vendorCountryLocation: string;
  category: string;
  price: number;
  thumbnail: string;
  vendor: IVendor;
  file: string;
  tags: string[];
  status: string;
  // for seo
  slug?: string;
  "meta-title"?: string;
  createdAt: string;
}

export type HandleProductStatusUpdateType = (
  productId: string,
  status: string
) => Promise<void>;

export type HandleVendorStatusUpdateType = (
  vendorId: string,
  status: string
) => Promise<void>;
