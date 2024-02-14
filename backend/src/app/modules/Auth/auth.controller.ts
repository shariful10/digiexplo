import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";
import { AppError } from "../../errors/AppError";
import sendResponseWithCookie from "../../utils/sendResponseWithCookie";

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { accessToken, user } = result;

  // sendResponse(res, {
  //   statusCode: httpStatus.OK,s
  //   success: true,
  //   message: "User Login successful",
  //   data: { accessToken, user },
  // });

  sendResponseWithCookie(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Login successful",
    // data: { accessToken, user },
    user: user,
  });

  console.log(user);
});

const getCookies = catchAsync(async (req, res) => {
  const cookies = req.cookies;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cookies get",
    data: cookies,
  });
});

const logoutUser = catchAsync(async (req, res) => {
  const response = {
    success: true,
    message: "User Logout successful",
  };
  res.status(httpStatus.OK).clearCookie("user").json(response);
});

export const AuthControllers = {
  loginUser,
  logoutUser,
  getCookies,
};
