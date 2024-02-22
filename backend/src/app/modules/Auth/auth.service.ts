import bcrypt from "bcrypt";
import httpStatus from "http-status";
import config from "../../config";
import { AppError } from "../../errors/AppError";
import { generateOTP } from "../../mail/OtpGenerate";
import { sendMail } from "../../mail/sendMail";
import { SessionModel } from "../sessions/session.model";
import { User } from "../user/user.model";
import { ILoginUser } from "./auth.interface";
import { CreateToken } from "./auth.utils";
const loginUser = async (payload: ILoginUser) => {
  // check if the user exists
  // const isUserExist = await User.findOne({ id: payload?.id });
  const isUserExist = await User.userExists(payload?.email);
  const user = await User.findOne({ email: payload?.email });

  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found !");
  }
  // throw error if password not matches:
  if (!payload?.password || !isUserExist?.password) {
    throw new AppError(httpStatus.BAD_REQUEST, "Password is required");
  }
  const isPasswordMatch = await User.isPasswordMatch(
    payload?.password,
    isUserExist?.password
  );

  if (!isPasswordMatch) {
    throw new AppError(httpStatus.FORBIDDEN, "Password doesn't match");
  }

  // create token and sent to the client
  const jwtPayload = {
    _id: isUserExist._id,
    firstName: isUserExist.firstName,
    lastName: isUserExist.lastName,
    username: isUserExist.username,
    email: isUserExist.email,
    phone: isUserExist.phone,
    profileImg: isUserExist.profileImg,
    // verificationID?: string,
    role: isUserExist.role,
    status: isUserExist.status,
    isDeleted: isUserExist.isDeleted,
    vendor: isUserExist.vendor,
    cart: isUserExist.cart,
    buyedProducts: isUserExist.buyedProducts,
  };

  const userToken = CreateToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires as string
  );

  // Access Granted: Send AccessToken, RefreshToken
  return {
    user,
  };
};

// const validateUser = async (token: string) => {
//   // checking if the given token is valid | verify the received token
//   const decoded = jwt.verify(
//     token,
//     config.jwt_access_secret as string
//   ) as JwtPayload;

//   const { _id, username, role } = decoded;
//   const isUserExist = await User.findOne({
//     _id: _id,
//     username: username,
//     role: role,
//   }).select("-isDeleted -createdAt -updatedAt -__v");
//   if (!isUserExist) {
//     throw new AppError(httpStatus.NOT_FOUND, "User not found !");
//   }

//   return { user: isUserExist };
// };

const forgetPasswordMailSend = async (email: string) => {
  const otp = generateOTP();
  const user = await User.findOne({ email });
  if (!user) {
    return {
      userNotFound: true,
    };
  }
  await sendMail({
    email,
    otp,
    subject: "Forget Password",
    username: user?.username as unknown as string,
  });
  const session = await SessionModel.create({
    email: email,
    username: user?.username,
    otp: otp,
  });
  return { user, session };
};

const forgetPassword = async (
  otp: number,
  password: string,
  session_id: string
) => {
  const findSession = await SessionModel.findById(session_id);
  if (!findSession) {
    return {
      no_database_exist: true,
    };
  }
  if (findSession.otp !== otp) {
    return {
      otp_wrong: true,
    };
  }
  const hastPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_round)
  );
  const update = await User.findOneAndUpdate(
    { email: findSession.email },
    { password: hastPassword }
  );
  await SessionModel.findByIdAndDelete(findSession._id);
  return { update };
};

export const AuthServices = {
  loginUser,
  // validateUser,

  forgetPasswordMailSend,
  forgetPassword,
};
