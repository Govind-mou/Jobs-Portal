import { useState } from "react";
import "./Register.css";
export default function Register() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      role: "candidate",
      password: "",
      confirmPassword: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log(formData);

      alert("Registration Successful");

      setLoading(false);

      setFormData({
        fullName: "",
        email: "",
        role: "candidate",
        password: "",
        confirmPassword: "",
      });
    }, 1500);
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <h1>🚀 Create Account</h1>

        <p>
          Join the AI Recruitment Portal
        </p>

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
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="candidate">
              Candidate
            </option>

            <option value="recruiter">
              Recruiter
            </option>
          </select>

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            name="confirmPassword"
            placeholder="Confirm Password"
            value={
              formData.confirmPassword
            }
            onChange={handleChange}
            required
          />

          <label>
            <input
              type="checkbox"
              onChange={() =>
                setShowPassword(
                  !showPassword
                )
              }
            />
            Show Password
          </label>

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>

        </form>

      </div>

    </div>
  );
}