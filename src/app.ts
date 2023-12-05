import express from "express";
import cors from "cors";
import { connectToDb } from "./config/config";
import userRouter from "./routes/user.route";
import customerRouter from "./routes/customer.route";
import dotenv from "dotenv";
import { autoGeneratePlanner } from "./utils/auto-generate-planner";
import cron from "node-cron";
import plannerRouter from "./routes/planner.route";

dotenv.config();
const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

// Schedule the cron job for periodic updates

cron.schedule("0 0 */7 * *", autoGeneratePlanner);

const PORT = process.env.PORT || 8080;

app.use("/api/users", userRouter);
app.use("/api/customers", customerRouter);
app.use("/api/planners", plannerRouter);


async function startApp() {
  try {
    await connectToDb();
    app.listen(PORT, () => {
      console.log("tqueue server live at port:", PORT);
    });
  } catch (error: any) {
    console.error("Error during app startup:", error);
    console.error("Error connecting to MongoDB:", error.message);
  }
}

startApp();
