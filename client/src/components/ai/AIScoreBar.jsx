import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AIScoreBar() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [data, setData] = useState({
    score: 0,
    atsScore: 0,
    skillScore: 0,
    experienceScore: 0,
    educationScore: 0,
    confidenceScore: 0,
    matchedSkills: 0,
    missingSkills: [],
    totalJobs: 0,
    interviewProbability: 0,
    hiringProbability: 0,
    careerLevel: "",
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchAIAnalysis();
  }, []);

  useEffect(() => {
    if (!data.score) return;

    let current = 0;

    const timer = setInterval(() => {
      current += 1;

      if (current >= data.score) {
        current = data.score;
        clearInterval(timer);
      }

      setProgress(current);
    }, 20);

    return () => clearInterval(timer);
  }, [data.score]);

  const fetchAIAnalysis = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "/api/ai/resume-analysis"
      );

      setData(response.data);
    } catch (err) {
      setError("Unable to load AI analysis");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const downloadReport = async () => {
    try {
      const response = await axios.get(
        "/api/ai/report",
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link = document.createElement("a");

      link.href = url;
      link.download = "AI_Report.pdf";

      document.body.appendChild(link);

      link.click();

      link.remove();
    } catch (error) {
      console.error(error);
    }
  };

  const getStatus = () => {
    if (data.score >= 90)
      return {
        text: "Excellent Candidate",
        color: "#16a34a",
      };

    if (data.score >= 75)
      return {
        text: "Strong Candidate",
        color: "#2563eb",
      };

    if (data.score >= 60)
      return {
        text: "Average Candidate",
        color: "#f59e0b",
      };

    return {
      text: "Needs Improvement",
      color: "#ef4444",
    };
  };

  const status = getStatus();

  if (loading) {
    return (
      <div className="ai-loading">
        <h2>Analyzing Resume...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ai-error">
        <h2>{error}</h2>

        <button onClick={fetchAIAnalysis}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="ai-dashboard-card">

      {/* Header */}

      <div className="ai-header">

        <div>
          <h2>AI Resume Intelligence</h2>

          <p>
            Analyzed against{" "}
            <strong>{data.totalJobs}</strong>
            {" "}active jobs
          </p>
        </div>

        <div
          className="status-badge"
          style={{
            backgroundColor: status.color,
          }}
        >
          {status.text}
        </div>

      </div>

      {/* Main Score */}

      <div className="score-wrapper">

        <div
          className="score-ring"
          style={{
            background: `conic-gradient(
              ${status.color}
              ${progress * 3.6}deg,
              #e5e7eb 0deg
            )`,
          }}
        >
          <div className="score-inner">
            <h1>{progress}%</h1>
            <p>Overall Match</p>
          </div>
        </div>

      </div>

      {/* Analytics */}

      <div className="analytics-grid">

        <MetricCard
          title="ATS Score"
          value={data.atsScore}
        />

        <MetricCard
          title="Skill Match"
          value={data.skillScore}
        />

        <MetricCard
          title="Experience"
          value={data.experienceScore}
        />

        <MetricCard
          title="Education"
          value={data.educationScore}
        />

        <MetricCard
          title="AI Confidence"
          value={data.confidenceScore}
        />

        <MetricCard
          title="Matched Skills"
          value={data.matchedSkills}
        />

      </div>

      {/* Career Predictions */}

      <div className="prediction-grid">

        <div className="prediction-card">
          <h2>{data.interviewProbability}%</h2>
          <p>Interview Chance</p>
        </div>

        <div className="prediction-card">
          <h2>{data.hiringProbability}%</h2>
          <p>Hiring Chance</p>
        </div>

        <div className="prediction-card">
          <h2>{data.careerLevel}</h2>
          <p>Career Level</p>
        </div>

      </div>

      {/* Missing Skills */}

      <div className="skills-section">

        <h3>Missing Skills</h3>

        <div className="skill-container">
          {data.missingSkills.map((skill) => (
            <span
              key={skill}
              className="skill-tag"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>

      {/* AI Recommendations */}

      <div className="recommendation-box">

        <h3>AI Recommendations</h3>

        <ul>
          <li>
            Add measurable achievements.
          </li>

          <li>
            Improve ATS keywords.
          </li>

          <li>
            Include portfolio projects.
          </li>

          <li>
            Add certifications.
          </li>

          <li>
            Upload GitHub profile.
          </li>
        </ul>

      </div>

      {/* Actions */}

      <div className="action-buttons">

        <button
          onClick={() =>
            navigate("/resume-builder")
          }
        >
          Improve Resume
        </button>

        <button
          onClick={() =>
            navigate("/jobs")
          }
        >
          View Jobs
        </button>

        <button
          onClick={downloadReport}
        >
          Download Report
        </button>

      </div>

    </div>
  );
}

function MetricCard({
  title,
  value,
}) {
  return (
    <div className="metric-card">
      <h2>{value}%</h2>
      <p>{title}</p>
    </div>
  );
}