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
const express_1 = __importDefault(require("express"));
const planner_model_1 = __importDefault(require("../models/planner.model"));
const planner_controller_1 = require("../controllers/planner.controller");
const router = express_1.default.Router();
// Endpoint to fetch a planner with a date range from the request body
router.get("/current-planner", planner_controller_1.findCurrentPlanner);
// Endpoint to update planner
router.put("/current-planner", planner_controller_1.updateCurrentPlanner);
// Endpoint to create initial planner
// WARNING: This is no longer to be used
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentDate = new Date();
        const plannerEntries = [];
        for (let i = 0; i < 7; i++) {
            const plannerDate = new Date();
            plannerDate.setDate(currentDate.getDate() + i);
            const plannerEntry = {
                date: plannerDate,
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
            };
            plannerEntries.push([plannerEntry]);
        }
        const newPlanner = new planner_model_1.default({
            planners: plannerEntries,
        });
        // Save the new planner document to the database
        yield newPlanner.save();
        res.status(201).json({ message: 'Planner created successfully', planner: newPlanner });
    }
    catch (error) {
        console.error('Error creating planner:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
