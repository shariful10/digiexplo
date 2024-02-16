import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { VendorValidation } from "./vendor.validation";
import { VendorController } from "./vendor.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";
import { upload } from "../uploadFile/awsUpload";
const router = express.Router();

const uploadVerification = upload.single('verificationId')
router.post(
  "/become-vendor/:userId",
  auth(USER_ROLE.USER),
  uploadVerification,
  validateRequest(VendorValidation.BecomeVendorZodValidation),
  VendorController.becomeVendor
);

router.get('/get-vendor/:vendorId',VendorController.getVendor)

export const VendorRoutes = router;
