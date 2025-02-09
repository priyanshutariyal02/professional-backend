import {app} from "./app.js";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at PORT: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection FAILED!", error);
  });

/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        // app call an error event
    app.on("error", (error) => {
        console.log("Application not able to talk with DB: ", error);
        throw error;
    });
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App is listening on PORT: ${process.env.PORT}`);
    });
} catch (error) {
    console.error("Error from mongoose: ", error);
    throw error;
}
})();

*/
