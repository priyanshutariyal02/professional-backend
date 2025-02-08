import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB is connected!\nDB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection FAILED!", error);
    process.exit(1); // Exit the process if connection fails
  }
};
