import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "./user.constant";
import { upload } from "../uploadFile/awsUpload";
const router = express.Router();

const userImage = upload.single('profileImg')
router.post(
  "/create-user",
  userImage,
  validateRequest(UserValidation.CreateUserZodSchema),

  UserController.createUser
);
router.get(
  "/get-user/:userId",
  auth(USER_ROLE.ADMIN, USER_ROLE.USER, USER_ROLE.VENDOR),
  UserController.getUser
);

export const UserRoutes = router;
