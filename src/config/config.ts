import mongoose from "mongoose";
import dotenv from "dotenv";
import { Error } from "mongoose";

dotenv.config();

const port = process.env.MONGO_PORT;
const host = process.env.MONGO_HOST;
const dbName = process.env.DB_NAME;

const connectToDb = async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(`mongodb://${host}:${port}/${dbName}`);
    console.log("Connected to MongoDB");
  } catch (error:any) {
    // Handle connection errors
    throw new Error("Could not connect to DB")
  }
};

export { connectToDb };
