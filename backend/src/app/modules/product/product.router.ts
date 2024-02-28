import express, { Router } from "express";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { upload } from "../uploadFile/awsUpload";
import { USER_ROLE } from "../user/user.constant";
import { ProductControllers } from "./product.controller";
import { ProductValidation } from "./product.validation";

const router = Router();

// all route are associate with vendor
const productImages = upload.fields([{ name: "file" }, { name: "thumbnail" }]);

router.post(
  "/create-product",
  auth(USER_ROLE.VENDOR),
  productImages,
  validateRequest(ProductValidation.createProductSchema),
  ProductControllers.createProduct
);

// get product by cateogry

router.get(
  "/get-products-by-category",
  ProductControllers.getProductsByCategory
);

// cart add realted route
// all route are associate with both user and vendor

router.post(
  "/add-cart/:productId",
  auth(USER_ROLE.USER, USER_ROLE.VENDOR),
  ProductControllers.addProductToCart
);
// router.get('/get-cart',auth(USER_ROLE.USER,USER_ROLE.VENDOR),ProductControllers.getCartProducts)

router.post(
  "/buy-product-intend/:productId",
  auth(USER_ROLE.USER),
  ProductControllers.buyProductPaymentIntend
);

router.post(
  "/buy-product/stripe/webhook",
  express.raw({ type: "application/json" }),
  ProductControllers.stripeHook
);

export const ProductRoutes = router;
