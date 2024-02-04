import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";
import { AppError } from "../../errors/AppError";

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);

  const { accessToken, user } = result;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Login successful",
    data: { accessToken, user },
  });
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

export const AuthControllers = {
  loginUser,
  validateUser,
};
