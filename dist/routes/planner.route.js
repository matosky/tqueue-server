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
router.get("/", planner_controller_1.findPlanner);
// Endpoint to update planner
router.put("/", planner_controller_1.updatePlanner);
// Endpoint to create initial planner
// WARNING: This is no longer to be used
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPlanner = new planner_model_1.default({
            planners: [
                [
                    {
                        date: new Date('2023-01-01'),
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
                ],
                [
                    {
                        date: new Date('2023-01-02'),
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
                ],
                [
                    {
                        date: new Date('2023-01-03'),
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
                ],
                [
                    {
                        date: new Date('2023-01-04'),
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
                ],
                [
                    {
                        date: new Date('2023-01-05'),
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
                ],
                [
                    {
                        date: new Date('2023-01-06'),
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
                ],
                [
                    {
                        date: new Date('2023-01-07'),
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
                ],
            ],
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
