import { Router } from "express"
import auth from "../../middleware/auth";
import { User } from "../user/user.model";
import { USER_ROLE } from "../user/user.constant";
import { ProductControllers } from "./product.controller";
import validateRequest from "../../middleware/validateRequest";
import { ProductValidation } from "./product.validation";



const router = Router()


router.post('/create-product',auth(USER_ROLE.VENDOR),validateRequest(ProductValidation.createProductSchema),ProductControllers.createProduct)


export const ProductRoutes = router;


