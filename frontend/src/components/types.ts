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

export interface ICart {
  _id: string;
  products: IProduct[];
  user: IUser;
  createdAt: string;
  updatedAt: string;
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
  cart: ICart;
  buyedProducts: [];
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
  updatedAt: string;
}

export type HandleProductStatusUpdateType = (
  productId: string,
  status: string
) => Promise<void>;

export type HandleVendorStatusUpdateType = (
  vendorId: string,
  status: string
) => Promise<void>;

export interface QueryParams {
  category?: string;
  limit?: number;
  page?: number;
}

export interface IOrder {
  _id: string;
  product: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFeaturedProduct {
  _id: string;
  product: IProduct;
}
