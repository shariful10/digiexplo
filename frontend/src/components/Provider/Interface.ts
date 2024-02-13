export interface IName {
  firstName: string;
  lastName: string;
}

export interface IUser {
  _id: string;
  name: IName;
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
  buyedProducts: string[] | [];
}

export interface CheckLoginResponse {
  isLoggedIn: boolean;
  user: IUser;
}

export type QueryData = {
  data: {
    data: CheckLoginResponse;
  };
};
