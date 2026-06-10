import { useState } from "react";
import "./RecruiterDashboard.css";
export default function RecruiterDashboard() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      applicants: 25,
      status: "Active",
    },
    {
      id: 2,
      title: "React Developer",
      applicants: 18,
      status: "Active",
    },
  ]);

  const addJob = () => {
    const newJob = {
      id: jobs.length + 1,
      title: "New Job Position",
      applicants: 0,
      status: "Active",
    };

    setJobs([...jobs, newJob]);
  };

  const deleteJob = (id) => {
    setJobs(
      jobs.filter((job) => job.id !== id)
    );
  };

  return (
    <div className="recruiter-dashboard">

      <div className="dashboard-header">
        <h1>Recruiter Dashboard</h1>

        <button
          onClick={addJob}
          className="post-job-btn"
        >
          + Post Job
        </button>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h2>{jobs.length}</h2>
          <p>Total Jobs</p>
        </div>

        <div className="stat-card">
          <h2>
            {jobs.reduce(
              (total, job) =>
                total + job.applicants,
              0
            )}
          </h2>
          <p>Total Applicants</p>
        </div>

      </div>

      <div className="dashboard-card">

        <h2>Manage Jobs</h2>

        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Applicants</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>

                <td>
                  {job.applicants}
                </td>

                <td>
                  {job.status}
                </td>

                <td>
                  <button
                    onClick={() =>
                      deleteJob(job.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}