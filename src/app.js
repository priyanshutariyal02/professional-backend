import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// limit the json data to prevent server crash
app.use(express.json({ limit: "16kb" }));

// Middleware to parse URL-encoded data from incoming requests
// - `extended: true` allows parsing of complex objects and arrays
// - `limit: "16kb"` restricts the request body size to 16KB to prevent large payloads
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Storing files in 'public' directory, files can be access directly
app.use(express.static("public"));

// TO perfrom CRUD over cookies on browser
app.use(cookieParser());

//Routes import

import userRouter from "./routes/user.routes.js";

// routes declaration

app.use("/api/v1/users", userRouter);

// url like : http://localhost:8000/api/v1/users/register

export { app };
