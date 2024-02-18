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
