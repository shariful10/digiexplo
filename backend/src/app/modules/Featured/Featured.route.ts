import express from "express";
import { FeaturedControllers } from "./Featured.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/add-featured-product",
  auth(USER_ROLE.ADMIN),
  FeaturedControllers.addFeaturedProduct
);

router.get("/get-featured-product", FeaturedControllers.getFeaturedProduct);

router.delete(
  "/delete-featured-product",
  auth(USER_ROLE.ADMIN),
  FeaturedControllers.deleteFeaturedProduct
);

export const FeaturedRouter = router;
