import express from "express";
import Planner from "../models/planner.model";
import { findPlanner, updatePlanner } from "../controllers/planner.controller";

const router = express.Router();



// Endpoint to fetch a planner with a date range from the request body
router.get("/", findPlanner);
// Endpoint to update planner
router.put("/", updatePlanner);























// Endpoint to create initial planner
// WARNING: This is no longer to be used
router.post('/', async (req, res) => {
  try {
    const newPlanner = new Planner({
      planners: [
        [
          {
            date: new Date('2023-01-01'),
            slots: [
              {
                slotNumber: 1,
                deliveries: [
                 
                ],
              },
              {
                slotNumber: 2,
                deliveries: [
                 
                ],
              },
              {
                slotNumber: 3,
                deliveries: [
                  
                ],
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
    await newPlanner.save();

    res.status(201).json({ message: 'Planner created successfully', planner: newPlanner });
  } catch (error) {
    console.error('Error creating planner:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
