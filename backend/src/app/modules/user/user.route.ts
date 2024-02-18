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
<<<<<<< HEAD
router.get(
  "/get-user/:userId",
  auth(USER_ROLE.ADMIN, USER_ROLE.USER, USER_ROLE.VENDOR),
  UserController.getUser
);
=======
router.get('/get-user/',auth(USER_ROLE.USER , USER_ROLE.VENDOR, USER_ROLE.ADMIN),UserController.getUser)

router.get('/get-cart',auth(USER_ROLE.USER , USER_ROLE.VENDOR, USER_ROLE.ADMIN),UserController.getCart)
>>>>>>> 1ca609a63d7d44a6357759f29c501e548e7d7921

export const UserRoutes = router;
