import express from "express";
import { getAllEvents } from "../controllers/event-controller";

const prodRouter = express.Router();
prodRouter.get("/getAllEvents", getAllEvents);
// prodRouter.post("/postEvents", getAllEvents);

export default prodRouter;