/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface IName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface IUser {
  name: IName;
  username: string;
  email: string;
  password: string;
  phone: string;
  profileImg: string;
  verificationID?: string;
  role?: "Admin" | "Vendor" | "User";
  status?: "Active" | "Blocked";
  isDeleted: boolean;
}

// Custom static methods:
export interface UserModel extends Model<IUser> {
  userExists(id: string): Promise<IUser | null>;
  isPasswordMatch(plainPass: string, hashedPass: string): Promise<boolean>;
  JwtIssueBeforePassChange(
    passwordChangedTimeStamp: Date,
    jwtIssueTimeStamp: number
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
