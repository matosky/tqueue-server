import mongoose from "mongoose";
import Slot from "./slot.model";

const plannerSchema = new mongoose.Schema({
  planners: [
    [
      {
        date: { type: Date, required: false },
        slots: { type: [Slot.schema], required: false },
      },
    ],
  ],
});

const Planner = mongoose.model("planners", plannerSchema)


export default Planner;