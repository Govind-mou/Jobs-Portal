import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showMessages, setShowMessages] =
    useState(false);

  const [showProfile, setShowProfile] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(false);

  // Demo User
  const user = {
    name: "Govind",
    role: "Candidate",
    avatar: "https://i.pravatar.cc/50",
  };

  const notifications = [
    "Your application was viewed",
    "New React Developer job posted",
    "Interview scheduled tomorrow",
  ];

  const messages = [
    "Recruiter sent a message",
    "Interview reminder",
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(
      `/jobs?keyword=${encodeURIComponent(
        search
      )}`
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    document.body.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light"
    );
  };

  return (
    <header className="header">

      {/* LEFT */}

      <div className="header-left">

        <Link
          to="/"
          className="logo"
        >
          🚀 AI Job Portal
        </Link>

      </div>

      {/* CENTER */}

      <div className="header-center">

        <form
          onSubmit={handleSearch}
          className="search-form"
        >
          <input
            type="text"
            placeholder="Search jobs, skills, companies..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <button type="submit">
            🔍
          </button>
        </form>

      </div>

      {/* RIGHT */}

      <div className="header-right">

        {/* Resume Upload */}

        <Link
          to="/resume-builder"
          className="header-btn"
        >
          📄 Resume
        </Link>

        {/* Saved Jobs */}

        <Link
          to="/saved-jobs"
          className="header-btn"
        >
          ❤️ Saved
        </Link>

        {/* Applications */}

        <Link
          to="/applications"
          className="header-btn"
        >
          📨 Applications
        </Link>

        {/* Theme */}

        <button
          className="icon-btn"
          onClick={toggleTheme}
        >
          {darkMode
            ? "☀️"
            : "🌙"}
        </button>

        {/* Notifications */}

        <div className="dropdown-wrapper">

          <button
            className="icon-btn"
            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }
          >
            🔔
            <span className="badge">
              {notifications.length}
            </span>
          </button>

          {showNotifications && (
            <div className="dropdown-menu">

              <h4>
                Notifications
              </h4>

              {notifications.map(
                (
                  notification,
                  index
                ) => (
                  <p key={index}>
                    {notification}
                  </p>
                )
              )}

            </div>
          )}

        </div>

        {/* Messages */}

        <div className="dropdown-wrapper">

          <button
            className="icon-btn"
            onClick={() =>
              setShowMessages(
                !showMessages
              )
            }
          >
            💬

            <span className="badge">
              {messages.length}
            </span>

          </button>

          {showMessages && (
            <div className="dropdown-menu">

              <h4>
                Messages
              </h4>

              {messages.map(
                (
                  message,
                  index
                ) => (
                  <p key={index}>
                    {message}
                  </p>
                )
              )}

            </div>
          )}

        </div>

        {/* PROFILE */}

        <div className="dropdown-wrapper">

          <img
            src={user.avatar}
            alt={user.name}
            className="avatar"
            onClick={() =>
              setShowProfile(
                !showProfile
              )
            }
          />

          {showProfile && (
            <div className="dropdown-menu profile-menu">

              <div className="profile-top">

                <img
                  src={user.avatar}
                  alt={user.name}
                />

                <div>
                  <h4>
                    {user.name}
                  </h4>

                  <small>
                    {user.role}
                  </small>
                </div>

              </div>

              <Link to="/profile">
                👤 My Profile
              </Link>

              <Link to="/dashboard">
                📊 Dashboard
              </Link>

              <Link to="/settings">
                ⚙️ Settings
              </Link>

              <Link to="/resume-builder">
                📄 Resume Builder
              </Link>

              <button
                onClick={
                  handleLogout
                }
                className="logout-btn"
              >
                🚪 Logout
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}