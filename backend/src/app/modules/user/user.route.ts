import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "./user.constant";

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(UserValidation.CreateUserZodSchema),
  UserController.createUser
);
router.get('/get-user/:userId',UserController.getUser)

export const UserRoutes = router;
