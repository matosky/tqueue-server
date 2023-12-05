"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerController = void 0;
const short_uuid_1 = __importDefault(require("short-uuid"));
const customer_model_1 = __importDefault(require("../models/customer.model"));
const customerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { firstName, lastName, email } = req.body;
        const customer = new customer_model_1.default({
            customerId: short_uuid_1.default.generate(),
            firstName,
            lastName,
            email,
        });
        yield customer.save();
        console.log("customer", customer);
        res.status(201).json(customer);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});
exports.customerController = customerController;
