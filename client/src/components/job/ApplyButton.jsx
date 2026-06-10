import { useState } from "react";
import { Link } from "react-router-dom";

export default function ApplyButton({
  jobId,
  variant = "primary",
  size = "md",
}) {
  const [loading, setLoading] =
    useState(false);

  const handleApply = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <Link
      to={`/apply/${jobId}`}
      onClick={handleApply}
      className={`apply-btn apply-${variant} apply-${size}`}
    >
      {loading
        ? "Processing..."
        : "Apply Now"}
    </Link>
  );
}