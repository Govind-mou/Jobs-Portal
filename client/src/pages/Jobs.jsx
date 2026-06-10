import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Jobs.css";
export default function Jobs() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Delhi",
      salary: "₹8 LPA",
      type: "Full Time",
    },
    {
      id: 2,
      title: "React Developer",
      company: "InnovateX",
      location: "Noida",
      salary: "₹10 LPA",
      type: "Remote",
    },
    {
      id: 3,
      title: "Node.js Developer",
      company: "CodeCraft",
      location: "Bangalore",
      salary: "₹12 LPA",
      type: "Full Time",
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      job.company
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="jobs-page">

      <div className="jobs-header">
        <h1>💼 Find Jobs</h1>
        <p>Browse available opportunities.</p>
      </div>

      <input
        type="text"
        placeholder="Search by job title or company..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <p>
        Total Jobs: {filteredJobs.length}
      </p>

      <div className="jobs-grid">

        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="job-card"
            >
              <h2>{job.title}</h2>

              <p>
                🏢 {job.company}
              </p>

              <p>
                📍 {job.location}
              </p>

              <p>
                💰 {job.salary}
              </p>

              <p>
                🕒 {job.type}
              </p>

              <div className="job-actions">

                <button
                  onClick={() =>
                    navigate(
                      `/jobs/${job.id}`
                    )
                  }
                >
                  View Details
                </button>

                <button
                  onClick={() =>
                    navigate(
                      `/apply-job/${job.id}`
                    )
                  }
                >
                  Apply Now
                </button>

              </div>

            </div>
          ))
        ) : (
          <h3>No jobs found.</h3>
        )}

      </div>

    </div>
  );
}