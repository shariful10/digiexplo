/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from "mongoose";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

const getUser = async (userId: string) =>{
  const user = await User.findById(userId)

  return user;
}

export const UserServices = {
  createUser,
  getUser
};
