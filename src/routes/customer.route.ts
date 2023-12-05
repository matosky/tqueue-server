import express from "express";
import { customerController } from "../controllers/customer.controller";


const router = express.Router();
router.post('/', customerController);

export default router;