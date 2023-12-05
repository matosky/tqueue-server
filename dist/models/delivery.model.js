"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliverySchema = void 0;
// delivery.model.js
const mongoose_1 = __importDefault(require("mongoose"));
exports.deliverySchema = new mongoose_1.default.Schema({
    customerID: { type: String, required: false },
    customerName: { type: String, required: false },
    pickUpLocation: { type: String, required: false },
    dropOffLocation: { type: String, required: false },
});
const Delivery = mongoose_1.default.model('Delivery', exports.deliverySchema);
exports.default = Delivery;
