import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";
import { AppError } from "../../errors/AppError";
import sendResponseWithCookie from "../../utils/sendResponseWithCookie";
import { generateOTP } from "../../mail/OtpGenerate";
import { SessionModel } from "../sessions/session.model";
import { User } from "../user/user.model";
import { sendMail } from "../../mail/sendMail";
import config from "../../config";

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { accessToken, user } = result;

  // sendResponse(res, {
  //   statusCode: httpStatus.OK,
  //   success: true,
  //   message: "User Login successful",
  //   data: { accessToken, user },
  // });
  sendResponseWithCookie(
    res,
    {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Login successful",

      session_id: undefined,
      user,
    },
    "user"
  );
});

const forgetPasswordMailSend = catchAsync(async (req, res) => {
  const { email } = req.body;

  const { session, user, userNotFound } =
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
      message: "otp get successfull",
      session_id: session?._id,
    },
    "session_id"
  );
});

const forgetPassword = catchAsync(async (req, res) => {
  const { otp, password } = req.body;
  const session_id = req.signedCookies.session_id;
  if (!session_id) {
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized");
  }

  const { no_database_exist, otp_wrong, update } =
    await AuthServices.forgetPassword(Number(otp), password, session_id);

  if (no_database_exist) {
    throw new AppError(httpStatus.FORBIDDEN, "session timeout");
  }
  if (otp_wrong) throw new AppError(httpStatus.FORBIDDEN, "wrong otp ");
  res.clearCookie('session_id')
  if (update) {
    sendResponse(res, {
      data: update,
      statusCode: httpStatus.OK,
      success: true,
      message: "pass word update successfull",
    });
  }
});

const validateUser = catchAsync(async (req, res) => {
  const payload = req.headers.authorization;
  const token = payload?.split(" ")[1];

  if (!token) {
    throw new AppError(404, "Token missing");
  }

  const result = await AuthServices.validateUser(token);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Login successful",
    data: result,
  });
});

const logoutUser = catchAsync(async (req, res) => {
  const response = {
    success: true,
    message: "User Logour successfull",
  };
  res.status(httpStatus.OK).clearCookie("user").json(response);
});

export const AuthControllers = {
  loginUser,
  validateUser,
  logoutUser,

  //
  forgetPasswordMailSend,
  forgetPassword,
};
