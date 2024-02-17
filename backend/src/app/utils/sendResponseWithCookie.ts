import { Response } from "express";
import config from "../config";

interface IResponse {
  session_id?: any;
  user?: any;
  statusCode: number;
  success: boolean;
  message?: string;
}

const sendResponseWithCookie = <T>(
  res: Response,
  data: IResponse,
  cookieKey: string
) => {
  // const cookieExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const cookieExpires = new Date(Date.now() + 30000);
  res
    .status(data.statusCode)
    .cookie(
      cookieKey,
      cookieKey === "user"
        ? data.user
        : cookieKey === "session_id"
          ? data.session_id
          : null,
      { expires: cookieExpires, secure: true, sameSite: "none" }
    )
    .json({
      success: data.success,
      statusCode: data.statusCode,
      message: data.message,
      data,
    });
};

export default sendResponseWithCookie;
