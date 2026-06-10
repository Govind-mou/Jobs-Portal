import { useState } from "react";
import "./PostJob.css";
export default function PostJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "Full Time",
    experience: "",
    skills: "",
    description: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Job Posted:", job);

    alert("Job Posted Successfully!");

    setJob({
      title: "",
      company: "",
      location: "",
      salary: "",
      type: "Full Time",
      experience: "",
      skills: "",
      description: "",
    });
  };

  return (
    <div className="post-job-page">

      <div className="post-job-card">

        <h1>💼 Post New Job</h1>

        <p>Create a new job opening for candidates.</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Job Title</label>

            <input
              type="text"
              name="title"
              value={job.title}
              onChange={handleChange}
              placeholder="Frontend Developer"
              required
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>

            <input
              type="text"
              name="company"
              value={job.company}
              onChange={handleChange}
              placeholder="ABC Technologies"
              required
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Location</label>

              <input
                type="text"
                name="location"
                value={job.location}
                onChange={handleChange}
                placeholder="Delhi"
              />
            </div>

            <div className="form-group">
              <label>Salary</label>

              <input
                type="text"
                name="salary"
                value={job.salary}
                onChange={handleChange}
                placeholder="₹8 LPA"
              />
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Job Type</label>

              <select
                name="type"
                value={job.type}
                onChange={handleChange}
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Remote</option>
                <option>Internship</option>
                <option>Contract</option>
              </select>
            </div>

            <div className="form-group">
              <label>Experience</label>

              <input
                type="text"
                name="experience"
                value={job.experience}
                onChange={handleChange}
                placeholder="2+ Years"
              />
            </div>

          </div>

          <div className="form-group">
            <label>Required Skills</label>

            <input
              type="text"
              name="skills"
              value={job.skills}
              onChange={handleChange}
              placeholder="React, JavaScript, Node.js"
            />
          </div>

          <div className="form-group">
            <label>Job Description</label>

            <textarea
              rows="8"
              name="description"
              value={job.description}
              onChange={handleChange}
              placeholder="Describe job responsibilities..."
            />
          </div>

          <button
            type="submit"
            className="post-job-btn"
          >
            🚀 Post Job
          </button>

        </form>

      </div>
    </div>
  );
}