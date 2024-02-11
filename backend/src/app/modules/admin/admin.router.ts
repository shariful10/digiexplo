import { Router } from "express";
import { AdminController } from "./admin.controller";

const router = Router();

router.get(
  "/get-pending-vendor-request",
  AdminController.getPendingVendorRequest
);
router.patch(
  "/accept-vendor-request/:vendorId",
  AdminController.acceptVendorRequest
);

export const AdminRoutes = router;
