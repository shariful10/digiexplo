import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { AppError } from "../errors/AppError";
import catchAsync from "../utils/catchAsync";
import jwt from 'jsonwebtoken'
import { USER_ROLE } from "../modules/user/user.constant";
import { User } from "../modules/user/user.model";
import config from "../config";

type TRequiredRole = Array<(typeof USER_ROLE)[keyof typeof USER_ROLE]>;

const auth = (...requiredRoles: TRequiredRole) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // const token = req.headers.authorization;
    const user = req.cookies.user
    if(!user) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized");
    }
    const token = jwt.verify(user,config.jwt_access_secret!) as {user: {_id:string,role:any}}

    // if no token received throw error
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized");
    }
    const { _id: userId, role } = token.user;
    // console.log(userId)
    // checking if the given token is valid | verify the received token
    // const decoded = jwt.verify(
    //   token,
    //   config.jwt_access_secret as string
    // ) as JwtPayload;

    // const { role, userId, iat } = decoded;
    // user existence check:
    const isUserExist = await User.findById(userId);
    if (!isUserExist) {
      throw new AppError(httpStatus.NOT_FOUND, "User not found !");
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      // checking if user meets the required roles
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You are not authorized to perform this action"
      );
    }

    // // Decoded
    // req.user = decoded as JwtPayload;
    req.user = token.user;
    next();
  });
};

export default auth;
