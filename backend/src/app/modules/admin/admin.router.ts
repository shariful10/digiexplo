import { Router } from "express";
import { AdminController } from "./admin.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";

const router = Router();

router.get(
  "/get-pending-vendor-request",
  auth(USER_ROLE.ADMIN),
  AdminController.getPendingVendorRequest
);
router.patch(
  "/accept-vendor-request/:vendorId",
  AdminController.acceptVendorRequest
);

export const AdminRoutes = router;
