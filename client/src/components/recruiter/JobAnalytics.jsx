import {
  Eye,
  Users,
  UserCheck,
  Briefcase,
  TrendingUp,
  TrendingDown,
  Target,
  Award,
} from "lucide-react";

export default function JobAnalytics({
  views = 0,
  applications = 0,
  shortlisted = 0,
  hired = 0,
}) {
  const applicationRate =
    views > 0
      ? ((applications / views) * 100).toFixed(1)
      : 0;

  const shortlistRate =
    applications > 0
      ? ((shortlisted / applications) * 100).toFixed(1)
      : 0;

  const hireRate =
    shortlisted > 0
      ? ((hired / shortlisted) * 100).toFixed(1)
      : 0;

  return (
    <div className="analytics-dashboard">
      {/* Header */}

      <div className="analytics-header">
        <div>
          <h2>Recruitment Analytics</h2>
          <p>
            Real-time hiring performance and
            candidate funnel insights.
          </p>
        </div>

        <button className="export-btn">
          Export Report
        </button>
      </div>

      {/* KPI CARDS */}

      <div className="stats-grid">
        <div className="stat-card">
          <div className="icon blue">
            <Eye size={24} />
          </div>

          <div>
            <p>Job Views</p>
            <h3>{views}</h3>
            <span className="positive">
              <TrendingUp size={14} />
              +18%
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon purple">
            <Users size={24} />
          </div>

          <div>
            <p>Applications</p>
            <h3>{applications}</h3>
            <span className="positive">
              <TrendingUp size={14} />
              +12%
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon orange">
            <UserCheck size={24} />
          </div>

          <div>
            <p>Shortlisted</p>
            <h3>{shortlisted}</h3>
            <span className="positive">
              <TrendingUp size={14} />
              +8%
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon green">
            <Briefcase size={24} />
          </div>

          <div>
            <p>Hired</p>
            <h3>{hired}</h3>
            <span className="negative">
              <TrendingDown size={14} />
              -2%
            </span>
          </div>
        </div>
      </div>

      {/* HIRING FUNNEL */}

      <div className="analytics-section">
        <h3>Hiring Funnel</h3>

        <div className="funnel-card">
          <div className="funnel-step">
            <span>Views</span>
            <strong>{views}</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill blue"
              style={{ width: "100%" }}
            />
          </div>

          <div className="funnel-step">
            <span>Applications</span>
            <strong>{applications}</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill purple"
              style={{
                width: `${applicationRate}%`,
              }}
            />
          </div>

          <div className="funnel-step">
            <span>Shortlisted</span>
            <strong>{shortlisted}</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill orange"
              style={{
                width: `${shortlistRate}%`,
              }}
            />
          </div>

          <div className="funnel-step">
            <span>Hired</span>
            <strong>{hired}</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill green"
              style={{
                width: `${hireRate}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* CONVERSION RATES */}

      <div className="conversion-grid">
        <div className="conversion-card">
          <Target size={26} />

          <h3>{applicationRate}%</h3>

          <p>View → Application</p>
        </div>

        <div className="conversion-card">
          <Award size={26} />

          <h3>{shortlistRate}%</h3>

          <p>Application → Shortlist</p>
        </div>

        <div className="conversion-card">
          <Briefcase size={26} />

          <h3>{hireRate}%</h3>

          <p>Shortlist → Hire</p>
        </div>
      </div>

      {/* AI INSIGHTS */}

      <div className="ai-insights">
        <h3>AI Recruitment Insights</h3>

        <ul>
          <li>
            Applications increased by 12%
            compared to last month.
          </li>

          <li>
            Top candidates have an average AI
            match score of 87%.
          </li>

          <li>
            Shortlisting efficiency improved
            by 9%.
          </li>

          <li>
            Most applicants come from LinkedIn
            and AI recommendations.
          </li>
        </ul>
      </div>
    </div>
  );
}