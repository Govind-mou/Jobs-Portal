import { Link } from "react-router-dom";
import { useState } from "react";
// import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Enter email address");
      return;
    }

    console.log("Subscribed:", email);

    alert("Newsletter subscribed!");

    setEmail("");
  };

  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="footer">

      {/* TOP SECTION */}

      <div className="footer-top">

        {/* Brand */}

        <div className="footer-section">

          <h2>🚀 AI Job Portal</h2>

          <p>
            Smart AI-powered recruitment
            platform helping candidates
            find jobs and recruiters hire
            top talent faster.
          </p>

          <div className="footer-stats">

            <div>
              <strong>25K+</strong>
              <span>Jobs</span>
            </div>

            <div>
              <strong>12K+</strong>
              <span>Companies</span>
            </div>

            <div>
              <strong>100K+</strong>
              <span>Candidates</span>
            </div>

          </div>

        </div>

        {/* Candidate */}

        <div className="footer-section">

          <h3>For Candidates</h3>

          <ul>

            <li>
              <Link to="/jobs">
                Browse Jobs
              </Link>
            </li>

            <li>
              <Link to="/resume-builder">
                Resume Builder
              </Link>
            </li>

            <li>
              <Link to="/ats-checker">
                ATS Checker
              </Link>
            </li>

            <li>
              <Link to="/job-match">
                AI Job Match
              </Link>
            </li>

            <li>
              <Link to="/interview-prep">
                Interview Prep
              </Link>
            </li>

            <li>
              <Link to="/applications">
                Applications
              </Link>
            </li>

          </ul>

        </div>

        {/* Recruiter */}

        <div className="footer-section">

          <h3>For Recruiters</h3>

          <ul>

            <li>
              <Link to="/post-job">
                Post Job
              </Link>
            </li>

            <li>
              <Link to="/candidates">
                Find Talent
              </Link>
            </li>

            <li>
              <Link to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li>
              <Link to="/analytics">
                Analytics
              </Link>
            </li>

            <li>
              <Link to="/ai-screening">
                AI Screening
              </Link>
            </li>

          </ul>

        </div>

        {/* Company */}

        <div className="footer-section">

          <h3>Company</h3>

          <ul>

            <li>
              <Link to="/about">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/careers">
                Careers
              </Link>
            </li>

            <li>
              <Link to="/blog">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/press">
                Press
              </Link>
            </li>

          </ul>

        </div>

        {/* Newsletter */}

        <div className="footer-section">

          <h3>Newsletter</h3>

          <p>
            Get AI job recommendations
            and career tips.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="newsletter-form"
          >
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

            <button type="submit">
              Subscribe
            </button>
          </form>

          <div className="social-links">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>

          </div>

        </div>

      </div>

      {/* MIDDLE */}

      <div className="footer-middle">

        <Link to="/privacy-policy">
          Privacy Policy
        </Link>

        <Link to="/terms">
          Terms of Service
        </Link>

        <Link to="/cookies">
          Cookie Policy
        </Link>

        <Link to="/security">
          Security
        </Link>

        <Link to="/help">
          Help Center
        </Link>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © {currentYear} AI Job Portal.
          All Rights Reserved.
        </p>

        <div className="footer-contact">

          <span>
            📧 support@aijobportal.com
          </span>

          <span>
            📞 +91 9876543210
          </span>

        </div>

      </div>

    </footer>
  );
}