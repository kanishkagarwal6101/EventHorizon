import express from "express";
import { getAllEvents } from "../controllers/event-controller.js";

const prodRouter = express.Router();
prodRouter.get("/getAllEvents", getAllEvents);

export default prodRouter;