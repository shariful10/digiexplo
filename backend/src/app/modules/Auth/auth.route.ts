import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { AuthControllers } from "./auth.controller";
import { AuthZodValidation } from "./auth.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/login",
  validateRequest(AuthZodValidation.LoginValidationSchema),
  AuthControllers.loginUser
);
router.post(
  "/forget-password-otp-sent",
  validateRequest(AuthZodValidation.credentialChangeMailGet),
  AuthControllers.forgetPasswordMailSend
);

router.post(
  "/forget-password",
  validateRequest(AuthZodValidation.credentialChangeOtpAndPassGet),
  AuthControllers.forgetPassword
);

router.post(
  "/logout",
  auth(USER_ROLE.ADMIN, USER_ROLE.USER, USER_ROLE.VENDOR),
  AuthControllers.logoutUser
);
router.post("/validate-user", AuthControllers.validateUser);

export const AuthRoutes = router;
