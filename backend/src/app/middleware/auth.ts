import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { AppError } from "../errors/AppError";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

import { User } from "../modules/user/user.model";
import { USER_ROLE } from "../modules/user/user.constant";


type TRequiredRole = Array<typeof USER_ROLE[keyof typeof  USER_ROLE]>

const auth = (...requiredRoles: TRequiredRole) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // const token = req.headers.authorization;
    const token = req.signedCookies.user
    // if no token received throw error
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized");
    }
    const {_id:userId,role} = token
    // console.log(userId)
    // checking if the given token is valid | verify the received token
    // const decoded = jwt.verify(
    //   token,
    //   config.jwt_access_secret as string
    // ) as JwtPayload;

    // const { role, userId, iat } = decoded;
    // user existence check:
    const isUserExist = await User.findById(userId)
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
    req.user = token
    next();
  });
};

export default auth;
