import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/User_Routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", userRouter);

mongoose.connect(
    "mongodb+srv://harshparikh001:awNhXaUbDPzoc29m@cluster0.z9l9jqh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Connected to the server and Listening on port 5000");
    });
});