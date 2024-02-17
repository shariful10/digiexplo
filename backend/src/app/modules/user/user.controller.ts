// import studentZodSchema from '../student/student.validation';
import httpStatus from "http-status";
import jwt from 'jsonwebtoken'
import config from '../../config/index'
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";
import sendResponseWithCookie from "../../utils/sendResponseWithCookie";

const createUser = catchAsync(async (req, res) => {
  const profileImg = req.file as Express.Multer.File
  const {user,email_exist,username_exist} = await UserServices.createUser({body:req.body,profileImg});
  if(email_exist) {
    return sendResponse(res, {
      statusCode:httpStatus.FORBIDDEN,
      success: false,
      message: "email already exist",
      data: null,
    })
  }
  if(username_exist) {
    return sendResponse(res, {
      statusCode:httpStatus.FORBIDDEN,
      success: false,
      message: "username already exist",
      data: null,
    })
  }
  const signedUser = jwt.sign({user},config.jwt_access_secret as string)

  sendResponseWithCookie(
    res,
    {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Login successful",

      session_id: undefined,
      user: signedUser,
    },
    "user"
  );
});

const getUser = catchAsync(async (req,res)=> {
  const {userId} = req.params
  const user = await UserServices.getUser(userId)
  sendResponse(res,{
    data:user,
    statusCode:httpStatus.OK,
    success:true,
    message:'user get successfull'
  })
})

export const UserController = {
  createUser,
  getUser
};


