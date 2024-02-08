import { Router } from "express"
import auth from "../../middleware/auth";
import { User } from "../user/user.model";
import { USER_ROLE } from "../user/user.constant";



const router = Router()


router.post('/create-product',auth(USER_ROLE.VENDOR))


export const ProductRoutes = router;