import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AIScoreBar from "../components/ai/AIScoreBar";

export default function ResumeAnalyzer() {
  const navigate = useNavigate();

  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [analysis, setAnalysis] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!validTypes.includes(file.type)) {
      alert("Only PDF or DOCX files allowed");
      return;
    }

    setResumeFile(file);
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + 5;
      });
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setProgress(100);

      setAnalysis({
        atsScore: 89,
        recruiterScore: 92,
        aiScore: 91,
        resumeCompletion: 94,
        experience: "3 Years",
        education: "B.Tech Computer Science",

        skillsFound: [
          "React",
          "JavaScript",
          "Redux",
          "Node.js",
          "MongoDB",
          "Git",
        ],

        missingSkills: [
          "Docker",
          "AWS",
          "Kubernetes",
        ],

        strengths: [
          "Strong Frontend Experience",
          "Excellent Projects",
          "Good ATS Keywords",
          "Modern Tech Stack",
        ],

        weaknesses: [
          "Cloud Skills Missing",
          "No Certifications",
          "Limited Leadership Experience",
        ],

        recommendations: [
          "Learn AWS",
          "Add Docker Projects",
          "Get AWS Certification",
          "Add Quantified Achievements",
        ],

        matchedJobs: [
          "Frontend Developer",
          "React Developer",
          "Full Stack Developer",
          "Software Engineer",
        ],
      });

      setLoading(false);
    }, 2500);
  };

  const resetAnalysis = () => {
    setResumeFile(null);
    setAnalysis(null);
    setProgress(0);
  };

  return (
    <div className="resume-analyzer">

      <div className="hero">

        <h1>AI Resume Analyzer</h1>

        <p>
          Upload your resume and get ATS,
          recruiter and AI-powered insights.
        </p>

      </div>

      <div className="upload-card">

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
        />

        {resumeFile && (
          <div className="file-info">
            <p>{resumeFile.name}</p>
            <small>
              {(resumeFile.size / 1024).toFixed(1)}
              KB
            </small>
          </div>
        )}

      </div>

      {loading && (
        <div className="loading-card">

          <h3>
            🤖 AI Analyzing Resume...
          </h3>

          <div className="progress-container">

            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <p>{progress}% Completed</p>

        </div>
      )}

      {analysis && (
        <>
          <AIScoreBar
            score={analysis.atsScore}
            matchedSkills={
              analysis.skillsFound.length
            }
            missingSkills={
              analysis.missingSkills.length
            }
            totalJobs={246}
          />

          <div className="score-grid">

            <ScoreCard
              title="ATS Score"
              value={analysis.atsScore}
            />

            <ScoreCard
              title="Recruiter Score"
              value={analysis.recruiterScore}
            />

            <ScoreCard
              title="AI Score"
              value={analysis.aiScore}
            />

            <ScoreCard
              title="Completion"
              value={analysis.resumeCompletion}
            />

          </div>

          <div className="profile-card">

            <h2>Candidate Profile</h2>

            <p>
              Experience:
              {analysis.experience}
            </p>

            <p>
              Education:
              {analysis.education}
            </p>

          </div>

          <div className="analysis-grid">

            <AnalysisList
              title="Skills Found"
              items={analysis.skillsFound}
            />

            <AnalysisList
              title="Missing Skills"
              items={analysis.missingSkills}
            />

          </div>

          <div className="analysis-grid">

            <AnalysisList
              title="Strengths"
              items={analysis.strengths}
            />

            <AnalysisList
              title="Improvements"
              items={analysis.weaknesses}
            />

          </div>

          <div className="recommendation-card">

            <h2>
              AI Recommendations
            </h2>

            <ul>
              {analysis.recommendations.map(
                (item) => (
                  <li key={item}>
                    {item}
                  </li>
                )
              )}
            </ul>

          </div>

          <div className="jobs-card">

            <h2>
              Recommended Jobs
            </h2>

            <ul>
              {analysis.matchedJobs.map(
                (job) => (
                  <li key={job}>
                    {job}
                  </li>
                )
              )}
            </ul>

          </div>

          <div className="actions">

            <button
              onClick={() =>
                navigate("/jobs")
              }
            >
              View Jobs
            </button>

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
              onClick={resetAnalysis}
            >
              Analyze New Resume
            </button>

          </div>
        </>
      )}
    </div>
  );
}

function ScoreCard({
  title,
  value,
}) {
  return (
    <div className="score-card">
      <h2>{value}%</h2>
      <p>{title}</p>
    </div>
  );
}

function AnalysisList({
  title,
  items,
}) {
  return (
    <div className="analysis-card">
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