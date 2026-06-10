import { useMemo, useState } from "react";
import JobCard from "./JobCard";
import Loader from "../ui/Loader";

export default function JobList({
  jobs = [],
  loading = false,
  error = "",
  onRefresh,
}) {
  const [view, setView] = useState("grid");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] =
    useState(1);

  const jobsPerPage = 9;

  const sortedJobs = useMemo(() => {
    const data = [...jobs];

    switch (sortBy) {
      case "salary":
        return data.sort(
          (a, b) =>
            (b.salaryValue || 0) -
            (a.salaryValue || 0)
        );

      case "match":
        return data.sort(
          (a, b) =>
            (b.matchScore || 0) -
            (a.matchScore || 0)
        );

      default:
        return data;
    }
  }, [jobs, sortBy]);

  const totalPages = Math.ceil(
    sortedJobs.length / jobsPerPage
  );

  const displayedJobs =
    sortedJobs.slice(
      (currentPage - 1) * jobsPerPage,
      currentPage * jobsPerPage
    );

  if (loading) {
    return (
      <Loader
        type="dots"
        text="Loading Jobs..."
      />
    );
  }

  if (error) {
    return (
      <div className="jobs-error">
        <h2>
          Failed to load jobs
        </h2>

        <p>{error}</p>

        <button
          onClick={onRefresh}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!jobs.length) {
    return (
      <div className="empty-state">

        <div className="empty-icon">
          🔍
        </div>

        <h2>No Jobs Found</h2>

        <p>
          Try different keywords,
          skills, location or salary
          filters.
        </p>

        <button
          onClick={onRefresh}
        >
          Refresh Jobs
        </button>

      </div>
    );
  }

  return (
    <div className="job-list-container">

      {/* Top Toolbar */}

      <div className="jobs-toolbar">

        <div className="results-info">
          <h3>
            {jobs.length} Jobs Found
          </h3>

          <small>
            Showing Page {currentPage}
            {" of "}
            {totalPages}
          </small>
        </div>

        <div className="toolbar-actions">

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value
              )
            }
          >
            <option value="latest">
              Latest Jobs
            </option>

            <option value="salary">
              Highest Salary
            </option>

            <option value="match">
              Best Match
            </option>
          </select>

          <button
            onClick={() =>
              setView(
                view === "grid"
                  ? "list"
                  : "grid"
              )
            }
          >
            {view === "grid"
              ? "📋 List"
              : "🔲 Grid"}
          </button>

        </div>

      </div>

      {/* Statistics */}

      <div className="jobs-stats">

        <div className="stat-card">
          <h2>{jobs.length}</h2>
          <p>Total Jobs</p>
        </div>

        <div className="stat-card">
          <h2>
            {
              jobs.filter(
                (job) =>
                  job.matchScore >=
                  80
              ).length
            }
          </h2>
          <p>High Matches</p>
        </div>

        <div className="stat-card">
          <h2>
            {
              jobs.filter(
                (job) =>
                  job.remote
              ).length
            }
          </h2>
          <p>Remote Jobs</p>
        </div>

      </div>

      {/* Job Cards */}

      <div
        className={
          view === "grid"
            ? "jobs-grid"
            : "jobs-list"
        }
      >
        {displayedJobs.map(
          (job) => (
            <JobCard
              key={
                job.id ||
                job._id
              }
              job={job}
            />
          )
        )}
      </div>

      {/* Pagination */}

      {totalPages > 1 && (
        <div className="pagination">

          <button
            disabled={
              currentPage === 1
            }
            onClick={() =>
              setCurrentPage(
                (prev) =>
                  prev - 1
              )
            }
          >
            ← Previous
          </button>

          <span>
            {currentPage} /{" "}
            {totalPages}
          </span>

          <button
            disabled={
              currentPage ===
              totalPages
            }
            onClick={() =>
              setCurrentPage(
                (prev) =>
                  prev + 1
              )
            }
          >
            Next →
          </button>

        </div>
      )}

    </div>
  );
}