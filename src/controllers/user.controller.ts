import User from "../models/user.model";
import { Request,Response, NextFunction } from "express";


export const userController = async (req:Request, res:Response) => {
    try {
      const { email, password } = req.body;
      const user =await new User({
         email: email,
         password: password
      })
      const savedUser = await user.save()
      res.status(201).json({user: savedUser});
    } catch (error) {
      res.status(500).json({ error: error});
    }
  }