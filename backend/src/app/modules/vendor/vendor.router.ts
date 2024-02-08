import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { VendorValidation } from "./vendor.validation";
import { VendorController } from "./vendor.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/become-vendor/:userId",
  auth(USER_ROLE.USER),
  validateRequest(VendorValidation.BecomeVendorZodValidation),
  VendorController.becomeVendor
);

export const VendorRoutes = router;
