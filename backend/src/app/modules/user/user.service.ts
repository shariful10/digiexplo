/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: IUser) => {
  const result = await User.create(payload);

  return result;
};

export const UserServices = {
  createUser,
};
