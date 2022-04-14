import express from "express";
import jobsController from "../controllers/jobsController.js";

// prettier-ignore
const { createJob, deleteJob, getAllJobs, updateJob, showStats } = jobsController;

const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);
// place before :id
router.route("/stats").get(showStats);
router.route("/:id").patch(updateJob).delete(deleteJob);

export default router;
