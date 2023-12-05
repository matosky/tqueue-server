"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const slot_model_1 = __importDefault(require("./slot.model"));
const plannerSchema = new mongoose_1.default.Schema({
    planners: [
        [
            {
                date: { type: Date, required: false },
                slots: { type: [slot_model_1.default.schema], required: false },
            },
        ],
    ],
});
const Planner = mongoose_1.default.model("planners", plannerSchema);
exports.default = Planner;
