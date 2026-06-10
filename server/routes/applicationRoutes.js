import express from "express";

import {
  applyJob,
  getMyApplications,
  updateApplicationStatus,
} from "../controllers/applicationController.js";

import {
  protect,
  recruiterOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Apply Job
router.post(
  "/apply/:jobId",
  protect,
  applyJob
);

// My Applications
router.get(
  "/my-applications",
  protect,
  getMyApplications
);

// Recruiter Updates Status
router.put(
  "/status/:id",
  protect,
  recruiterOnly,
  updateApplicationStatus
);

export default router;