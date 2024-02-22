import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import config from "../../config";
import { AppError } from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import sendResponseWithCookie from "../../utils/sendResponseWithCookie";
import { AuthServices } from "./auth.service";
const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { user } = result;

  const userId = user?._id;
  const signedUser = jwt.sign({ userId }, config.jwt_access_secret as string);

  sendResponseWithCookie(
    res,
    {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Login successful",

      session_id: undefined,
      user_id: signedUser,
    },
    "user_id"
  );
});

const forgetPasswordMailSend = catchAsync(async (req, res) => {
  const { email } = req.body;

  const { session, userNotFound } =
    await AuthServices.forgetPasswordMailSend(email);
  if (userNotFound) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: true,
      message: "User not found",
      data: null,
    });
  }
  sendResponseWithCookie(
    res,
    {
      statusCode: httpStatus.OK,
      success: true,
      message: "otp get successful",
      session_id: session?._id,
    },
    "session_id"
  );
});

const forgetPassword = catchAsync(async (req, res) => {
  const { otp, password } = req.body;
  const session_id = req.cookies.session_id;
  if (!session_id) {
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized");
  }
  const { no_database_exist, otp_wrong, update } =
    await AuthServices.forgetPassword(Number(otp), password, session_id);
  if (no_database_exist) {
    throw new AppError(httpStatus.FORBIDDEN, "session timeout");
  }
  if (otp_wrong) throw new AppError(httpStatus.FORBIDDEN, "wrong otp ");
  res.clearCookie("session_id");
  if (update) {
    sendResponse(res, {
      data: update,
      statusCode: httpStatus.OK,
      success: true,
      message: "pass word update successful",
    });
  }
});

// const validateUser = catchAsync(async (req, res) => {
//   const cookies = req.cookies.user;
//   // const token = payload?.split(" ")[1];
//   const decoded = jwt.verify(cookies, config.jwt_access_secret!);

//   console.log(decoded);

//   // if (!token) {
//   //   throw new AppError(404, "Token missing");
//   // }

//   // const result = await AuthServices.validateUser(token);

//   // sendResponse(res, {
//   //   statusCode: httpStatus.OK,
//   //   success: true,
//   //   message: "User Login successful",
//   //   data: result,
//   // });
// });

const logoutUser = catchAsync(async (req, res) => {
  const response = {
    success: true,
    message: "User Logout successful",
  };
  res.status(httpStatus.OK).clearCookie("user_id").json(response);
});

export const AuthControllers = {
  loginUser,
  logoutUser,
  // validateUser,
  //
  forgetPasswordMailSend,
  forgetPassword,
};
