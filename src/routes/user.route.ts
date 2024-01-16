import express, { Request, Response } from "express";
import { userController } from "../controllers/user.controller";

const router = express.Router();

router.get("/", (req: Request,res: Response)=>{
    res.status(200).json({hello: "Hello"})
})

router.post('/', userController);

export default router;
