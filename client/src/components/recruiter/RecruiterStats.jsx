import { useMemo } from "react";
import "./RecruiterStats.css";

export default function RecruiterStats({
  totalJobs = 0,
  activeJobs = 0,
  draftJobs = 0,
  closedJobs = 0,

  totalApplicants = 0,
  newApplicants = 0,

  shortlisted = 0,
  interviews = 0,
  offers = 0,
  hiredCandidates = 0,

  avgMatchScore = 0,
  avgHireDays = 0,

  monthlyGrowth = 0,
}) {
  const hiringRate = useMemo(() => {
    if (!totalApplicants) return 0;

    return (
      (
        hiredCandidates /
        totalApplicants
      ) * 100
    ).toFixed(1);
  }, [
    hiredCandidates,
    totalApplicants,
  ]);

  const offerRate = useMemo(() => {
    if (!totalApplicants) return 0;

    return (
      (offers /
        totalApplicants) *
      100
    ).toFixed(1);
  }, [
    offers,
    totalApplicants,
  ]);

  const getGrowthIcon = () => {
    if (monthlyGrowth > 0)
      return "📈";

    if (monthlyGrowth < 0)
      return "📉";

    return "➖";
  };

  const stats = [
    {
      icon: "💼",
      title: "Total Jobs",
      value: totalJobs,
    },
    {
      icon: "🟢",
      title: "Active Jobs",
      value: activeJobs,
    },
    {
      icon: "📝",
      title: "Draft Jobs",
      value: draftJobs,
    },
    {
      icon: "🔒",
      title: "Closed Jobs",
      value: closedJobs,
    },
    {
      icon: "👥",
      title: "Applicants",
      value: totalApplicants,
    },
    {
      icon: "🔥",
      title: "New Today",
      value: newApplicants,
    },
    {
      icon: "⭐",
      title: "Shortlisted",
      value: shortlisted,
    },
    {
      icon: "🎤",
      title: "Interviews",
      value: interviews,
    },
    {
      icon: "📨",
      title: "Offers Sent",
      value: offers,
    },
    {
      icon: "🏆",
      title: "Hired",
      value: hiredCandidates,
    },
    {
      icon: "🤖",
      title: "AI Match",
      value: `${avgMatchScore}%`,
    },
    {
      icon: "⏳",
      title: "Avg Hire Time",
      value: `${avgHireDays} Days`,
    },
  ];

  return (
    <div className="recruiter-dashboard-stats">

      {/* Top Metrics */}

      <div className="stats-grid">

        {stats.map((stat) => (
          <div
            key={stat.title}
            className="stat-card"
          >
            <div className="stat-icon">
              {stat.icon}
            </div>

            <div className="stat-content">
              <h2>{stat.value}</h2>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}

      </div>

      {/* Analytics Summary */}

      <div className="analytics-row">

        <div className="analytics-card">

          <h3>
            Hiring Rate
          </h3>

          <h1>
            {hiringRate}%
          </h1>

          <p>
            Candidates hired from
            total applicants
          </p>

        </div>

        <div className="analytics-card">

          <h3>
            Offer Rate
          </h3>

          <h1>
            {offerRate}%
          </h1>

          <p>
            Offers sent to candidates
          </p>

        </div>

        <div className="analytics-card">

          <h3>
            Monthly Growth
          </h3>

          <h1>
            {getGrowthIcon()}
            {" "}
            {monthlyGrowth}%
          </h1>

          <p>
            Compared to last month
          </p>

        </div>

      </div>

      {/* Progress Indicators */}

      <div className="progress-section">

        <div className="progress-item">

          <div className="progress-header">
            <span>
              Hiring Progress
            </span>

            <span>
              {hiringRate}%
            </span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width:
                  `${hiringRate}%`,
              }}
            />
          </div>

        </div>

        <div className="progress-item">

          <div className="progress-header">
            <span>
              AI Candidate Quality
            </span>

            <span>
              {avgMatchScore}%
            </span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill ai"
              style={{
                width:
                  `${avgMatchScore}%`,
              }}
            />
          </div>

        </div>

      </div>

    </div>
  );
}