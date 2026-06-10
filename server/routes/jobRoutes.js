import express from "express";

import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

import {
  protect,
  recruiterOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// All Jobs
router.get("/", getJobs);

// Single Job
router.get("/:id", getJobById);

// Create Job
router.post(
  "/",
  protect,
  recruiterOnly,
  createJob
);

// Update Job
router.put(
  "/:id",
  protect,
  recruiterOnly,
  updateJob
);

// Delete Job
router.delete(
  "/:id",
  protect,
  recruiterOnly,
  deleteJob
);

export default router;