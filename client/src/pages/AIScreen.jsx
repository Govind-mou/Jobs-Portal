import { useState } from "react";
import "./AIScreen.css";
export default function AIScreen() {
  const [resumeText, setResumeText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeResume = () => {
    if (!resumeText.trim()) {
      alert("Please paste your resume");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setResult({
        atsScore: 87,
        strengths: [
          "React.js",
          "JavaScript",
          "API Integration",
        ],
        missingSkills: [
          "TypeScript",
          "Docker",
        ],
        recommendations: [
          "Add more project details",
          "Use ATS keywords",
          "Add measurable achievements",
        ],
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="ai-screen">

      <h1>🤖 ATS Resume Checker</h1>

      <textarea
        rows="10"
        placeholder="Paste your resume here..."
        value={resumeText}
        onChange={(e) =>
          setResumeText(e.target.value)
        }
      />

      <button
        onClick={analyzeResume}
        disabled={loading}
      >
        {loading
          ? "Analyzing..."
          : "Analyze Resume"}
      </button>

      {result && (
        <div className="results">

          <div className="score-card">
            <h2>{result.atsScore}%</h2>
            <p>ATS Score</p>
          </div>

          <div className="analysis-card">
            <h3>✅ Strengths</h3>

            <ul>
              {result.strengths.map(
                (item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="analysis-card">
            <h3>⚠ Missing Skills</h3>

            <ul>
              {result.missingSkills.map(
                (item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="analysis-card">
            <h3>🚀 Suggestions</h3>

            <ul>
              {result.recommendations.map(
                (item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

        </div>
      )}

    </div>
  );
}