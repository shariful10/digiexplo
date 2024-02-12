// import studentZodSchema from '../student/student.validation';
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUser(req.body);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully",
    data: result,
  });
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


