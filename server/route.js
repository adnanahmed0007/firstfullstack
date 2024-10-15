import { Router } from "express";
import { Usersdetail } from "./userController.js";
 import { Userlogin } from "./userController.js";
 import { userWrite } from "./userController.js";
 
const router=Router();
router.route("/register").post(Usersdetail);
router.route("/login").post(Userlogin);
router.route("/write").post(userWrite)
export default router;