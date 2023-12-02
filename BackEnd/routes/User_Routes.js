import express from "express";

const userRouter = express.Router();

import { getAllUsers, login, signup } from "../controllers/user-controller.js";

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);
userRouter.post("/login", login);


export default userRouter;