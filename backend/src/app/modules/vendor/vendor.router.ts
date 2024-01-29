import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { VendorValidation } from "./vendor.validation";
import { VendorController } from "./vendor.controller";

const router = express.Router();

router.post(
  "/become-vendor",
  validateRequest(VendorValidation.BecomeVendorZodValidation),
  VendorController.becomeVendor
);

export const VendorRoutes = router;
