import express from "express";
import { Logindetails } from "../controller/LoginController.js";
const router = express.Router();

router.route("/").get(Logindetails);

export default router;
