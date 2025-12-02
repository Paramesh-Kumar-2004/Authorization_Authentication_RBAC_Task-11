import express from "express";
import {
    RegisterUser,
    LoginUser,
    GetUserProfile
} from "../Controllers/UserController.js";
import { AuthMiddleware } from "../Middleware/Auth.js";



const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/profile", AuthMiddleware, Authorization("admin"), GetUserProfile);


export default router;