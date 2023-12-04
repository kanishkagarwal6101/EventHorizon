import express from "express";
const movieRouter = express.Router();
import { getseats, postseats } from "../controllers/movie-controller.js";

movieRouter.get("/getseats/", getseats);
movieRouter.post("/postseats", postseats);


export default movieRouter;