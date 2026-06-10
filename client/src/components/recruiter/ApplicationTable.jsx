import { useState } from "react";

export default function ApplicantsTable({
  applicants = [],
}) {
  const [search, setSearch] = useState("");

  const filteredApplicants = applicants.filter(
    (applicant) =>
      applicant.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      applicant.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Selected":
        return "status selected";

      case "Rejected":
        return "status rejected";

      case "Interview":
        return "status interview";

      default:
        return "status pending";
    }
  };

  return (
    <div className="applicants-container">
      <div className="table-header">
        <div>
          <h2>Applicants Management</h2>
          <p>
            Review candidates, AI match scores,
            resumes, and application status.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search applicants..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search-input"
        />
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{applicants.length}</h3>
          <p>Total Applicants</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              applicants.filter(
                (a) => a.status === "Interview"
              ).length
            }
          </h3>
          <p>Interviews</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              applicants.filter(
                (a) => a.status === "Selected"
              ).length
            }
          </h3>
          <p>Selected</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              applicants.filter(
                (a) => a.matchScore >= 80
              ).length
            }
          </h3>
          <p>Top AI Matches</p>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="applicants-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Skills</th>
              <th>Experience</th>
              <th>AI Match</th>
              <th>Status</th>
              <th>Resume</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredApplicants.map(
              (applicant) => (
                <tr key={applicant._id}>
                  <td>
                    <div className="candidate-info">
                      <img
                        src={
                          applicant.avatar ||
                          "https://i.pravatar.cc/50"
                        }
                        alt={applicant.name}
                      />

                      <div>
                        <h4>{applicant.name}</h4>
                        <p>
                          {applicant.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="skills">
                      {applicant.skills
                        ?.split(",")
                        .map((skill, index) => (
                          <span
                            key={index}
                            className="skill-tag"
                          >
                            {skill}
                          </span>
                        ))}
                    </div>
                  </td>

                  <td>
                    {applicant.experience ||
                      "2 Years"}
                  </td>

                  <td>
                    <div className="score-box">
                      <span>
                        {applicant.matchScore}%
                      </span>

                      <div className="progress">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${applicant.matchScore}%`,
                          }}
                        />
                      </div>
                    </div>
                  </td>

                  <td>
                    <span
                      className={getStatusClass(
                        applicant.status
                      )}
                    >
                      {applicant.status}
                    </span>
                  </td>

                  <td>
                    <button className="resume-btn">
                      View Resume
                    </button>
                  </td>

                  <td>
                    <div className="actions">
                      <button className="view-btn">
                        View
                      </button>

                      <button className="interview-btn">
                        Interview
                      </button>

                      <button className="select-btn">
                        Select
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}