import { useState } from "react";

export default function PostJobForm({ onSubmitJob }) {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
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

    if (onSubmitJob) {
      onSubmitJob(job);
    }

    console.log(job);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post New Job</h2>

      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={job.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={job.company}
        onChange={handleChange}
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={job.location}
        onChange={handleChange}
      />

      <input
        type="text"
        name="salary"
        placeholder="Salary"
        value={job.salary}
        onChange={handleChange}
      />

      <input
        type="text"
        name="skills"
        placeholder="React, Node, MongoDB"
        value={job.skills}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Job Description"
        rows="6"
        value={job.description}
        onChange={handleChange}
      />

      <button type="submit">
        Post Job
      </button>
    </form>
  );
}