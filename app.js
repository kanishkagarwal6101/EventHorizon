import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/User_Routes.js";
import eventRouter from "./routes/Event_Routes.js";
import movieRouter from "./routes/Movie_Routes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/landingpage", eventRouter);
app.use("/grid", movieRouter);

mongoose
  .connect(
    "mongodb+srv://harshparikh001:awNhXaUbDPzoc29m@cluster0.z9l9jqh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("Connected to the server and Listening on port 8080");
    });
  });
