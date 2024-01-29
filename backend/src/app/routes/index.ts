import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { VendorRoutes } from "../modules/vendor/vendor.router";

const router = Router();

const moduleRotes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/request",
    route: VendorRoutes,
  },
];

moduleRotes.forEach((route) => router.use(route.path, route.route));

export default router;
