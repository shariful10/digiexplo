/* eslint-disable @typescript-eslint/no-explicit-any */
import { CartModel } from "../cart/cart.model";
import { uploadFile } from "../uploadFile/awsUpload";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import { Express } from "express";

const createUser = async ({
  body,
  profileImg,
}: {
  body: IUser;
  profileImg: Express.Multer.File;
}) => {
  const userExist = await User.findOne({
    $or: [{ username: body.username }, { email: body.email }],
  });
  if (userExist?.username === body.username) {
    return {
      username_exist: true,
    };
  }
  if (userExist?.email === body.email) {
    return {
      email_exist: true,
    };
  }
  const profileImgUpload = await uploadFile(profileImg, "user");
  const user = await User.create({
    ...body,
    profileImg: profileImgUpload.Location,
  });
  return { user };
};

const getUser = async (userId: string) => {
  const user = await User.findById(userId).select(
    "name  profileImg  email  role  phone"
  );

  return user;
};

const getCart = async (userId: string) => {
  const user = await CartModel.findOne({ user: userId }).populate("products");
  return user;
};

export const UserServices = {
  createUser,
  getUser,
  getCart,
};
