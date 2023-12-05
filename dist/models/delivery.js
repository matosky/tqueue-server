"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliverySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.deliverySchema = new mongoose_1.default.Schema({
    customerId: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    pickUpLocation: { type: String, required: true },
    dropOffLocation: { type: String, required: true },
});
const Delivery = mongoose_1.default.model("delivery", exports.deliverySchema);
exports.default = Delivery;
