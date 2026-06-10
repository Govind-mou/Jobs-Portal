import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  const pages = [
    {
      title: "Jobs",
      icon: "💼",
      path: "/jobs",
      desc: "Browse available jobs",
    },
    {
      title: "Job Details",
      icon: "📄",
      path: "/jobs/1",
      desc: "View job information",
    },
    {
      title: "Apply Job",
      icon: "📝",
      path: "/apply-job/1",
      desc: "Apply for a job",
    },
    {
      title: "AI Screen",
      icon: "🤖",
      path: "/ai-screen",
      desc: "Analyze resumes",
    },
    {
      title: "Login",
      icon: "🔐",
      path: "/login",
      desc: "Login to account",
    },
    {
      title: "Register",
      icon: "👤",
      path: "/register",
      desc: "Create account",
    },
    {
      title: "Profile",
      icon: "🙍",
      path: "/profile",
      desc: "Manage profile",
    },
    {
      title: "Post Job",
      icon: "📢",
      path: "/post-job",
      desc: "Create new job",
    },
    {
      title: "Recruiter Dashboard",
      icon: "🏢",
      path: "/recruiter-dashboard",
      desc: "Manage jobs & applicants",
    },
  ];

  return (
    <div className="home-page">

      <section className="hero-section">
        <h1>🚀 AI Job Portal</h1>

        <p>
          Complete recruitment platform for
          candidates and recruiters.
        </p>

        <div className="hero-actions">
          <Link to="/jobs">
            <button>Browse Jobs</button>
          </Link>

          <Link to="/register">
            <button>Get Started</button>
          </Link>
        </div>
      </section>

      <section className="dashboard-section">

        <h2>Portal Modules</h2>

        <div className="features-grid">

          {pages.map((page, index) => (
            <Link
              key={index}
              to={page.path}
              className="feature-card"
            >
              <h1>{page.icon}</h1>

              <h3>{page.title}</h3>

              <p>{page.desc}</p>
            </Link>
          ))}

        </div>

      </section>

      <section className="stats-section">

        <div className="stat-card">
          <h2>100+</h2>
          <p>Jobs</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Candidates</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Recruiters</p>
        </div>

      </section>

    </div>
  );
}