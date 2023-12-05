"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// slot.model.js
const mongoose_1 = __importDefault(require("mongoose"));
const delivery_model_1 = __importDefault(require("./delivery.model"));
const slotSchema = new mongoose_1.default.Schema({
    slotNumber: { type: Number, required: false },
    deliveries: { type: [delivery_model_1.default.schema], required: false },
});
const Slot = mongoose_1.default.model('Slot', slotSchema);
exports.default = Slot;
