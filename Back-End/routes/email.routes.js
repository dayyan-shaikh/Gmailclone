import express from "express";
import { createEmail, deleteEmail } from "../controllers/email.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js"

const router = express.Router();

router.route("/create").post(isAuthenticated,createEmail);
router.route("/email/:id").post(isAuthenticated,deleteEmail);

export default router;