import Planner from "../models/planner.model";

// Function to generate and save a new planner
export const autoGeneratePlanner = async () => {
  try {
    // Get the date of the latest planner
    const latestPlanner = await Planner.findOne().sort({ 'planners.0.date': -1 });
    // Use optional chaining to handle possible null or undefined values
    const lastDate = latestPlanner?.planners?.slice(-1)?.[0]?.[0]?.date;
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
    const newPlanner = new Planner({ planners: initialPlanners });

    // Save the new planner to the database
    await newPlanner.save();
    console.log('Auto-generated planner:', newPlanner);

  } catch (error) {
    console.error('Error generating and saving planner:', error);
  }
};
