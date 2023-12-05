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
const planner_model_1 = __importDefault(require("../models/planner.model"));
// Initial creation of the planner
function createInitialPlanner() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const currentDate = new Date();
            // Create a new date object for the end of the current week
            const endOfWeek = new Date(currentDate);
            endOfWeek.setDate(currentDate.getDate() + 7);
            // Check if a planner already exists for the current week
            const existingPlanner = yield planner_model_1.default.findOne({
                date: {
                    $gte: currentDate,
                    $lt: endOfWeek,
                },
            });
            if (!existingPlanner) {
                const newPlanner = new planner_model_1.default({
                    date: currentDate,
                    slots: [
                        {
                            slotNumber: 1,
                            deliveries: [],
                        },
                        {
                            slotNumber: 2,
                            deliveries: [],
                        },
                        {
                            slotNumber: 3,
                            deliveries: [],
                        },
                        {
                            slotNumber: 4,
                            deliveries: [],
                        },
                    ],
                });
                yield newPlanner.save();
                console.log("Initial planner created.");
            }
        }
        catch (error) {
            console.error("Error creating initial planner:", error);
        }
    });
}
exports.default = createInitialPlanner;
//   date    |     slot1      |  slot2   |  slot3  |slot4
// 1/1/2023    delivery, 
//             more delivery
// 2/1/2023
// 3/1/2023
// 4/1/2023
// 5/1/2023
// 6/1/2023
// 7/1/2023
