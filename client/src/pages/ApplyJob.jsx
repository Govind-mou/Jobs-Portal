import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ApplyJob.css";
export default function ApplyJob() {
  const { id } = useParams();

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      phone: "",
      coverLetter: "",
    });

  const [resume, setResume] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!resume) {
      alert("Please upload resume");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="apply-job">

      <h1>Apply For Job</h1>

      <p>Job ID: {id}</p>

      {success && (
        <p>
          ✅ Application Submitted
          Successfully
        </p>
      )}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="coverLetter"
          placeholder="Cover Letter"
          rows="5"
          value={formData.coverLetter}
          onChange={handleChange}
        />

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) =>
            setResume(
              e.target.files[0]
            )
          }
          required
        />

        {resume && (
          <p>
            📄 {resume.name}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Submitting..."
            : "Apply Now"}
        </button>

      </form>

    </div>
  );
}