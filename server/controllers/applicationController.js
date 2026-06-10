import Application from "../models/Application.js";
import Job from "../models/Job.js";

// Apply Job
export const applyJob = async (
  req,
  res
) => {
  try {
    const job = await Job.findById(
      req.params.jobId
    );

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    const application =
      await Application.create({
        applicant: req.user.id,
        job: job._id,
      });

    res.status(201).json({
      success: true,
      application,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// My Applications
export const getMyApplications =
  async (req, res) => {
    try {
      const applications =
        await Application.find({
          applicant: req.user.id,
        })
          .populate("job")
          .sort({
            createdAt: -1,
          });

      res.status(200).json(
        applications
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

// Update Status
export const updateApplicationStatus =
  async (req, res) => {
    try {
      const application =
        await Application.findByIdAndUpdate(
          req.params.id,
          {
            status: req.body.status,
          },
          { new: true }
        );

      res.status(200).json(
        application
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };