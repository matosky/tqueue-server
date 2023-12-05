import express from "express";
import Planner from "../models/planner.model";
import { findCurrentPlanner, updateCurrentPlanner } from "../controllers/planner.controller";

const router = express.Router();



// Endpoint to fetch a planner with a date range from the request body
router.get("/current-planner", findCurrentPlanner);
// Endpoint to update planner
router.put("/current-planner", updateCurrentPlanner);























// Endpoint to create initial planner
// WARNING: This is no longer to be used
router.post('/', async (req, res) => {
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

    const newPlanner = new Planner({
      planners: plannerEntries,
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
