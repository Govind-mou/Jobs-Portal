import Resume from "../models/Resume.js";

// ATS Score Checker
export const calculateATSScore =
  async (req, res) => {
    try {
      const { skills } = req.body;

      let score = 50;

      if (skills?.length > 5)
        score += 15;

      if (skills?.length > 10)
        score += 15;

      if (skills?.includes("React"))
        score += 10;

      if (skills?.includes("Node.js"))
        score += 10;

      if (score > 100)
        score = 100;

      res.status(200).json({
        atsScore: score,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

// AI Resume Summary
export const generateSummary =
  async (req, res) => {
    try {
      const {
        name,
        skills,
        experience,
      } = req.body;

      const summary = `${name} is a professional with ${experience} years of experience in ${skills.join(
        ", "
      )}. Skilled in developing scalable applications and solving complex business problems.`;

      res.status(200).json({
        summary,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

// AI Job Match
export const matchResumeWithJob =
  async (req, res) => {
    try {
      const {
        jobSkills,
        resumeSkills,
      } = req.body;

      const matched =
        resumeSkills.filter(
          (skill) =>
            jobSkills.includes(skill)
        );

      const score = Math.round(
        (matched.length /
          jobSkills.length) *
          100
      );

      res.status(200).json({
        matchedSkills: matched,
        matchScore: score,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };