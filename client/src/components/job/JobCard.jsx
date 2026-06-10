import { Link } from "react-router-dom";
import { useState } from "react";
import ApplyButton from "./ApplyButton";

export default function JobCard({
  job,
}) {
  const [saved, setSaved] =
    useState(false);

  const getMatchColor = () => {
    if (job.matchScore >= 90)
      return "#16a34a";

    if (job.matchScore >= 75)
      return "#f59e0b";

    return "#dc2626";
  };

  return (
    <div className="advanced-job-card">

      <div className="job-top">

        <div className="company-section">
          <img
            src={job.logo}
            alt={job.company}
            className="company-logo"
          />

          <div>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
          </div>
        </div>

        <div
          className="match-score"
          style={{
            background:
              getMatchColor(),
          }}
        >
          {job.matchScore}% Match
        </div>

      </div>

      <div className="job-info">

        <span>
          📍 {job.location}
        </span>

        <span>
          💰 {job.salary}
        </span>

        <span>
          💼 {job.jobType}
        </span>

        <span>
          ⏳ {job.experience}
        </span>

      </div>

      <div className="skills-section">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="skill-tag"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="job-description">
        {job.description}
      </div>

      <div className="job-actions">

        <Link
          to={`/job/${job.id}`}
          className="details-btn"
        >
          View Details
        </Link>

        <ApplyButton
          jobId={job.id}
        />

        <button
          className="save-btn"
          onClick={() =>
            setSaved(!saved)
          }
        >
          {saved
            ? "★ Saved"
            : "☆ Save"}
        </button>

      </div>

    </div>
  );
}