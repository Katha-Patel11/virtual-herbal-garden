import { Router } from "express";
import findCure from "../controller/cure.controller.js";
import { registerUser } from "../controller/register.controller.js";
import { login } from "../controller/register.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);
router.post("/find-cure", authMiddleware, findCure);

export default router;
