import express from "express";
import { userSighUp } from "../Controllers/authcontroller.js";

const router = express.Router()

router.post("/signup",userSighUp)

export default router;