import { Request, Response, NextFunction } from "express";
import short from "short-uuid";
import Customer from "../models/customer.model";

export const customerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    console.log(req.body)
  try {
    const { firstName, lastName, email } = req.body;
    const customer = new Customer({
      customerId: short.generate(),
      firstName,
      lastName,
      email,
    });
    await customer.save();
    console.log("customer", customer)
    res.status(201).json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
