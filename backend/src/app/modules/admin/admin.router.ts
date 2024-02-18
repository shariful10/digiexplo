import { Router } from "express";
import { AdminController } from "./admin.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";
import validateRequest from "../../middleware/validateRequest";
import { VendorValidation } from "../vendor/vendor.validation";

const router = Router();

router.get(
  "/get-pending-vendor-request",
  auth(USER_ROLE.ADMIN),
  AdminController.getPendingVendorRequest
);
router.patch(
  "/update-vendor-request/:vendorId",
  auth(USER_ROLE.ADMIN),
  AdminController.updateVendorRequest
);

router.patch("/vendor-profile-update/:vendorId",validateRequest(VendorValidation.UpdateVendorProfile),AdminController.updateVendorProfile)


// admin product related route

router.get('/get-pending-products',auth(USER_ROLE.ADMIN),AdminController.getPendingProducts)

router.patch('/product-status-update/:productId',auth(USER_ROLE.ADMIN),AdminController.updateProductStatus)

export const AdminRoutes = router;
