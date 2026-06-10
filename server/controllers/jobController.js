import Job from "../models/Job.js";

// Create Job
export const createJob = async (
  req,
  res
) => {
  try {
    const job = await Job.create({
      ...req.body,
      recruiter: req.user.id,
    });

    res.status(201).json({
      success: true,
      job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Jobs
export const getJobs = async (
  req,
  res
) => {
  try {
    const jobs = await Job.find()
      .populate(
        "recruiter",
        "name email"
      )
      .sort({
        createdAt: -1,
      });

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Job
export const getJobById = async (
  req,
  res
) => {
  try {
    const job = await Job.findById(
      req.params.id
    );

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Job
export const updateJob = async (
  req,
  res
) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Job
export const deleteJob = async (
  req,
  res
) => {
  try {
    await Job.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Job deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};