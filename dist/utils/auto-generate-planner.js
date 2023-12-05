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
exports.autoGeneratePlanner = void 0;
const planner_model_1 = __importDefault(require("../models/planner.model"));
// Function to generate and save a new planner
const autoGeneratePlanner = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        // Get the date of the latest planner
        const latestPlanner = yield planner_model_1.default.findOne().sort({ 'planners.0.date': -1 });
        // Use optional chaining to handle possible null or undefined values
        const lastDate = (_d = (_c = (_b = (_a = latestPlanner === null || latestPlanner === void 0 ? void 0 : latestPlanner.planners) === null || _a === void 0 ? void 0 : _a.slice(-1)) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.date;
        // Use the last date to calculate the start date for the new planner
        const startDate = lastDate ? new Date(lastDate.getTime() + 24 * 60 * 60 * 1000) : new Date();
        // Generate initialPlanners for the next 7 days
        const initialPlanners = Array.from({ length: 7 }, (_, index) => {
            const currentDate = new Date(startDate.getTime() + index * 24 * 60 * 60 * 1000);
            return [
                {
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
                },
            ];
        });
        // Create a new planner with the initial data
        const newPlanner = new planner_model_1.default({ planners: initialPlanners });
        // Save the new planner to the database
        yield newPlanner.save();
        console.log('Auto-generated planner:', newPlanner);
    }
    catch (error) {
        console.error('Error generating and saving planner:', error);
    }
});
exports.autoGeneratePlanner = autoGeneratePlanner;
