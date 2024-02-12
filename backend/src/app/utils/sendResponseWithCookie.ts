import { Response } from "express";
import config from "../config";

interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
  user: any;
}

const sendResponseWithCookie = <T>(res: Response, data: IResponse<T>) => {
  const cookieExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  res
    .status(data.statusCode)
    .cookie("user", data.user, {  expires: cookieExpires ,secure:true,sameSite:'none',signed:true})
    .json({
      success: data.success,
      statusCode: data.statusCode,
      message: data.message,
      data,
    });
};

export default sendResponseWithCookie;
