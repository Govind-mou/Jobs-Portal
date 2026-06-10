import { useEffect, useState } from "react";
// import "./Loader.css";

export default function Loader({
  text = "Loading...",
  size = "md",
  fullscreen = false,
  overlay = true,

  type = "spinner",

  progress = null,
  autoProgress = false,

  stage = "",

  estimatedTime = "",

  showPercentage = true,

  allowCancel = false,
  onCancel,

  status = "loading", // loading | success | error

  retryAction,
}) {
  const [internalProgress, setInternalProgress] =
    useState(progress || 0);

  useEffect(() => {
    if (!autoProgress) return;

    const timer = setInterval(() => {
      setInternalProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + 5;
      });
    }, 300);

    return () => clearInterval(timer);
  }, [autoProgress]);

  useEffect(() => {
    if (progress !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInternalProgress(progress);
    }
  }, [progress]);

  return (
    <div
      className={`
        loader-wrapper
        ${fullscreen ? "loader-fullscreen" : ""}
        ${overlay ? "loader-overlay" : ""}
      `}
    >
      {/* LOADING STATE */}

      {status === "loading" && (
        <>
          {type === "spinner" && (
            <div
              className={`spinner spinner-${size}`}
            />
          )}

          {type === "dots" && (
            <div className="dots-loader">
              <span />
              <span />
              <span />
            </div>
          )}

          {type === "pulse" && (
            <div className="pulse-loader" />
          )}

          {type === "resume" && (
            <div className="resume-loader">
              📄 ➜ 🤖 ➜ 📊
            </div>
          )}

          {type === "ats" && (
            <div className="ats-loader">
              🔍 ATS Scanning Resume...
            </div>
          )}

          <h3>{text}</h3>

          {stage && (
            <p className="loader-stage">
              {stage}
            </p>
          )}

          {estimatedTime && (
            <small className="estimate">
              ETA: {estimatedTime}
            </small>
          )}

          {(progress !== null ||
            autoProgress) && (
            <>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width:
                      `${internalProgress}%`,
                  }}
                />
              </div>

              {showPercentage && (
                <span className="progress-text">
                  {internalProgress}%
                </span>
              )}
            </>
          )}

          {allowCancel && (
            <button
              className="cancel-btn"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
        </>
      )}

      {/* SUCCESS */}

      {status === "success" && (
        <div className="loader-success">
          <div className="success-icon">
            ✅
          </div>

          <h3>
            Completed Successfully
          </h3>
        </div>
      )}

      {/* ERROR */}

      {status === "error" && (
        <div className="loader-error">
          <div className="error-icon">
            ❌
          </div>

          <h3>
            Something Went Wrong
          </h3>

          {retryAction && (
            <button
              onClick={retryAction}
            >
              Retry
            </button>
          )}
        </div>
      )}
    </div>
  );
}