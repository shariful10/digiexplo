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



// cart add realted route
// all route are associate with both user and vendor

router.post('/add-cart/:productId',auth(USER_ROLE.USER,USER_ROLE.VENDOR),ProductControllers.addProductToCart)
router.get('/get-cart',auth(USER_ROLE.USER,USER_ROLE.VENDOR),ProductControllers.getCartProducts)



router.post('/buy-product-intend/:productId',auth(USER_ROLE.USER),ProductControllers.buyProductPaymentIntend)


export const ProductRoutes = router;


