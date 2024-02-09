import { Router } from "express"
import auth from "../../middleware/auth";
import { User } from "../user/user.model";
import { USER_ROLE } from "../user/user.constant";
import { ProductControllers } from "./product.controller";
import validateRequest from "../../middleware/validateRequest";
import { ProductValidation } from "./product.validation";
import { CartValidation } from "../cart/cart.validation";



const router = Router()

// all route are associate with vendor
router.post('/create-product',auth(USER_ROLE.VENDOR),validateRequest(ProductValidation.createProductSchema),ProductControllers.createProduct)


// all route are associate with both user and vendor

router.post('/add-cart/:productId',auth(USER_ROLE.USER),validateRequest(CartValidation.CreateCartZodSchema),)

export const ProductRoutes = router;


