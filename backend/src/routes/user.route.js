import { Router } from "express";
import findCure from "../controller/cure.controller.js";

const router = Router();

router.post('/find-cure',findCure);

export default router;