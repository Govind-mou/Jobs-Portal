import { useState } from "react";
import axios from "axios";
import AIScoreBar from "../components/ai/AIScoreBar";
import { useNavigate } from "react-router-dom";

export default function ResumeAnalyzer() {
  const navigate = useNavigate();

  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] =
    useState(0);

  const [error, setError] = useState("");

  const [analysis, setAnalysis] =
    useState(null);

  const validateFile = (file) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError(
        "Only PDF and DOCX files are allowed."
      );
      return false;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be under 5MB.");
      return false;
    }

    return true;
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!validateFile(file)) return;

    setResumeFile(file);
    setError("");
    setLoading(true);

    const formData = new FormData();

    formData.append("resume", file);

    try {
      const res = await axios.post(
        "/api/resume/analyze",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },

          onUploadProgress: (event) => {
            const percent = Math.round(
              (event.loaded * 100) /
                event.total
            );

            setUploadProgress(percent);
          },
        }
      );

      setAnalysis(res.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Analysis failed."
      );
    } finally {
      setLoading(false);
    }
  };

  const downloadReport = async () => {
    try {
      const res = await axios.get(
        "/api/resume/report",
        {
          responseType: "blob",
        }
      );

      const url =
        window.URL.createObjectURL(
          new Blob([res.data])
        );

      const link =
        document.createElement("a");

      link.href = url;
      link.download =
        "AI_Resume_Report.pdf";

      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="resume-analyzer-page">

      <div className="page-header">
        <h1>
          AI Resume Analyzer
        </h1>

        <p>
          Upload your resume and get
          ATS score, recruiter insights,
          job matching and AI-powered
          improvement suggestions.
        </p>
      </div>

      {/* Upload Section */}

      <div className="upload-card">

        <div className="upload-icon">
          📄
        </div>

        <h3>
          Upload Resume
        </h3>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
        />

        {resumeFile && (
          <div className="file-preview">
            <p>
              {resumeFile.name}
            </p>

            <small>
              {(
                resumeFile.size /
                1024 /
                1024
              ).toFixed(2)}
              MB
            </small>
          </div>
        )}

      </div>

      {/* Error */}

      {error && (
        <div className="error-box">
          {error}
        </div>
      )}

      {/* Loading */}

      {loading && (
        <div className="loading-card">

          <h3>
            🤖 AI Analysis Running
          </h3>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width:
                  `${uploadProgress}%`,
              }}
            />
          </div>

          <p>
            {uploadProgress}%
            Uploaded
          </p>

        </div>
      )}

      {/* Analysis */}

      {analysis && (
        <>
          <AIScoreBar
            score={
              analysis.overallScore
            }
            atsScore={
              analysis.atsScore
            }
            skillScore={
              analysis.skillScore
            }
            experienceScore={
              analysis.experienceScore
            }
            educationScore={
              analysis.educationScore
            }
            confidenceScore={
              analysis.confidenceScore
            }
            matchedSkills={
              analysis.skillsFound
                .length
            }
            missingSkills={
              analysis.missingSkills
            }
            totalJobs={
              analysis.totalJobs
            }
          />

          {/* Metrics */}

          <div className="metrics-grid">

            <MetricCard
              title="ATS Score"
              value={
                analysis.atsScore
              }
            />

            <MetricCard
              title="Recruiter Score"
              value={
                analysis.recruiterScore
              }
            />

            <MetricCard
              title="Job Match"
              value={
                analysis.jobMatchScore
              }
            />

            <MetricCard
              title="Resume Quality"
              value={
                analysis.resumeQuality
              }
            />

          </div>

          {/* Skills */}

          <div className="analysis-grid">

            <AnalysisCard
              title="Skills Found"
              items={
                analysis.skillsFound
              }
              type="success"
            />

            <AnalysisCard
              title="Missing Skills"
              items={
                analysis.missingSkills
              }
              type="danger"
            />

          </div>

          {/* Strengths */}

          <div className="analysis-grid">

            <AnalysisCard
              title="Strengths"
              items={
                analysis.strengths
              }
              type="success"
            />

            <AnalysisCard
              title="Areas To Improve"
              items={
                analysis.weaknesses
              }
              type="warning"
            />

          </div>

          {/* AI Suggestions */}

          <div className="recommendation-card">

            <h2>
              AI Recommendations
            </h2>

            <ul>
              {analysis.recommendations.map(
                (
                  recommendation
                ) => (
                  <li
                    key={
                      recommendation
                    }
                  >
                    {
                      recommendation
                    }
                  </li>
                )
              )}
            </ul>

          </div>

          {/* Actions */}

          <div className="action-buttons">

            <button
              onClick={() =>
                navigate(
                  "/resume-builder"
                )
              }
            >
              Improve Resume
            </button>

            <button
              onClick={() =>
                navigate("/jobs")
              }
            >
              View Matching Jobs
            </button>

            <button
              onClick={
                downloadReport
              }
            >
              Download Report
            </button>

          </div>
        </>
      )}
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

function AnalysisCard({
  title,
  items,
  type,
}) {
  return (
    <div
      className={`analysis-card ${type}`}
    >
      <h3>{title}</h3>

      <ul>
        {items.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}