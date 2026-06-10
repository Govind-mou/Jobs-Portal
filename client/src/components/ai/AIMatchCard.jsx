import { Link } from "react-router-dom";
import { useState } from "react";

export default function AIMatchCard({
  id,
  jobTitle,
  company,
  companyLogo,
  location,
  salary,
  matchScore,
  skills = [],
  requiredSkills = [],
  remote = false,
  featured = false,
}) {
  const [saved, setSaved] = useState(false);
  const [applied, setApplied] = useState(false);

  const missingSkills = requiredSkills.filter(
    (skill) => !skills.includes(skill)
  );

  const getScoreColor = () => {
    if (matchScore >= 90) return "#10b981";
    if (matchScore >= 75) return "#f59e0b";
    return "#ef4444";
  };

  const handleApply = () => {
    setApplied(true);

    // API Call
    // applyJob(id)
  };

  return (
    <div className="ai-match-card">

      {featured && (
        <span className="featured-badge">
          ⭐ Recommended By AI
        </span>
      )}

      <div className="card-header">

        <div className="company-section">
          <img
            src={companyLogo}
            alt={company}
            className="company-logo"
          />

          <div>
            <h2>{jobTitle}</h2>
            <p>{company}</p>
          </div>
        </div>

        <div
          className="match-circle"
          style={{
            border: `4px solid ${getScoreColor()}`
          }}
        >
          <h3>{matchScore}%</h3>
          <span>Match</span>
        </div>

      </div>

      <div className="job-meta">
        <span>📍 {location}</span>
        <span>💰 {salary}</span>

        {remote && (
          <span className="remote-tag">
            🌍 Remote
          </span>
        )}
      </div>

      <div className="skills-section">

        <h4>Your Skills</h4>

        <div className="skills">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

      </div>

      <div className="ai-analysis">

        <h4>🤖 AI Analysis</h4>

        {matchScore >= 90 && (
          <div className="success-analysis">
            Excellent Match.
            Resume strongly aligns with role requirements.
          </div>
        )}

        {matchScore >= 75 && matchScore < 90 && (
          <div className="warning-analysis">
            Good Match.
            Improve a few missing skills for higher chances.
          </div>
        )}

        {matchScore < 75 && (
          <div className="danger-analysis">
            Moderate Match.
            Significant skill improvements recommended.
          </div>
        )}

      </div>

      {missingSkills.length > 0 && (
        <div className="skill-gap">

          <h4>🚀 Missing Skills</h4>

          <div className="missing-list">
            {missingSkills.map((skill) => (
              <span key={skill} className="missing-skill">
                {skill}
              </span>
            ))}
          </div>

        </div>
      )}

      <div className="resume-insights">

        <h4>📄 Resume Insights</h4>

        <ul>
          <li>✔ Experience matches role</li>
          <li>✔ ATS Friendly Resume</li>
          <li>✔ Strong Skill Alignment</li>
          <li>
            ✔ Recommended Application Priority:
            High
          </li>
        </ul>

      </div>

      <div className="card-actions">

        <Link
          to={`/jobs/${id}`}
          className="details-btn"
        >
          View Details
        </Link>

        <button
          className="save-btn"
          onClick={() => setSaved(!saved)}
        >
          {saved ? "❤️ Saved" : "🤍 Save"}
        </button>

        <button
          className="apply-btn"
          onClick={handleApply}
          disabled={applied}
        >
          {applied
            ? "✅ Applied"
            : "🚀 Apply Now"}
        </button>

      </div>

    </div>
  );
}