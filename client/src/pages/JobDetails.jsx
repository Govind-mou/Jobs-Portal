import { useParams, useNavigate } from "react-router-dom";
import "./JobDetails.css";
export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = {
    id,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Delhi",
    salary: "₹8 LPA",
    type: "Full Time",
    experience: "1-3 Years",
    description:
      "Looking for a React developer to build modern web applications and create responsive user interfaces.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  };

  return (
    <div className="job-details">

      <div className="job-header">

        <h1>{job.title}</h1>

        <h3>{job.company}</h3>

        <p>📍 {job.location}</p>

      </div>

      <div className="job-info">

        <p>
          <strong>Salary:</strong> {job.salary}
        </p>

        <p>
          <strong>Job Type:</strong> {job.type}
        </p>

        <p>
          <strong>Experience:</strong> {job.experience}
        </p>

      </div>

      <div className="job-description">

        <h2>Job Description</h2>

        <p>{job.description}</p>

      </div>

      <div className="job-skills">

        <h2>Required Skills</h2>

        {job.skills.map((skill, index) => (
          <span
            key={index}
            className="skill-badge"
          >
            {skill}
          </span>
        ))}

      </div>

      <div className="job-actions">

        <button
          onClick={() => navigate(-1)}
        >
          Back
        </button>

        <button
          onClick={() =>
            navigate(`/apply-job/${job.id}`)
          }
        >
          Apply Now
        </button>

      </div>

    </div>
  );
}