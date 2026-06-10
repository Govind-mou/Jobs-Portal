import express from "express";

import {
  calculateATSScore,
  generateSummary,
  matchResumeWithJob,
} from "../controllers/aiController.js";

import {
  protect,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// ATS Score Checker
router.post(
  "/ats-score",
  protect,
  calculateATSScore
);

// AI Summary Generator
router.post(
  "/generate-summary",
  protect,
  generateSummary
);

// Resume Job Match
router.post(
  "/match-job",
  protect,
  matchResumeWithJob
);

export default router;