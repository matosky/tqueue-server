import Planner from "../models/planner.model";
import { Request, Response } from "express";
import { PlannerDocument, Slot } from "types";

export const findCurrentPlanner = async (req: Request, res: Response) => {
  try {
    // Find the latest planner document
    const latestPlanner = await Planner.findOne({})
      .sort({ _id: -1 }); // Sort by ObjectId in descending order

    if (!latestPlanner) {
      return res
        .status(404)
        .json({ error: "No planner found for the specified current day." });
    }

    // Flatten the planners array
    const allPlanners = latestPlanner.planners.flat();

    res.status(200).json({ data: allPlanners });
  } catch (error) {
    console.error("Error fetching planner:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateCurrentPlanner = async (req: Request, res: Response) => {
  try {
    // Destructure required parameters from the request body
    const {
      startDate,
      endDate,
      slotNumberOfCurrentDay,
      customerDelivery,
      currentDay,
    } = req.body;

    // Find the current planner within the date range
    const currentPlanner = (await Planner.findOne({
      "planners.0.0.date": { $gte: startDate, $lte: endDate },
    }).sort({ "planners.0.0.date": 1 })) as PlannerDocument | null;

    if (!currentPlanner) {
      return res
        .status(404)
        .json({ error: "No planner found within the specified date range." });
    }
   // Accessing the date property of each planner item
const dates: string[] = currentPlanner.planners.map((planner: Array<{ date: Date; slots: Slot[] }>) => {
    const formattedDate = new Date(planner[0].date)
      .toISOString()
      .split("T")[0];
    return formattedDate;
  });
  

    // Find a date that matches the given currentDay
    const matchingDate = dates.find((date) => date === currentDay);

    if (!matchingDate) {
      return res.status(404).json({
        error: "No matching date found for the specified currentDay.",
      });
    }

    // Get the index of the matching date
    const matchingDateIndex = dates.indexOf(matchingDate);

    // Locate the day within the planner with the given matching date index
    const matchingDay = currentPlanner.planners[matchingDateIndex][0];

    if (!matchingDay) {
      return res
        .status(404)
        .json({ error: "Day not found for the specified currentDay." });
    }

    if (!matchingDay) {
      return res
        .status(404)
        .json({ error: "Day not found for the specified currentDay." });
    }

    // Locate the slot within the found day with the given slotNumber
    const matchingSlot = matchingDay.slots.find(
      (slot: Slot) => slot.slotNumber === slotNumberOfCurrentDay
    );

    if (!matchingSlot) {
      return res
        .status(404)
        .json({ error: "Slot not found for the specified slotNumber." });
    }

    // Add the provided customer delivery object to the delivery array of the identified slot
    matchingSlot.deliveries.push(customerDelivery);

    // Save the updated planner document
    await currentPlanner.save();

    res.status(200).json({
      message: "Planner item updated successfully.",
      planner: currentPlanner,
    });
  } catch (error) {
    console.error("Error updating planner item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
