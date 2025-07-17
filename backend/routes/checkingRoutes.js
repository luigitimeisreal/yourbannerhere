import express from "express";
import { checkConnectivity } from "../controllers/checkingController.js";

const router = express.Router();

router.get("/check", checkConnectivity);

export default router;