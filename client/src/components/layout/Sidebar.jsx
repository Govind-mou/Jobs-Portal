import { NavLink } from "react-router-dom";
import { useState } from "react";
// import "./Sidebar.css";

export default function Sidebar() {
  const [collapsed, setCollapsed] =
    useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: "📊",
      path: "/dashboard",
    },
    {
      name: "Jobs",
      icon: "💼",
      path: "/jobs",
    },
    {
      name: "Resume Builder",
      icon: "📄",
      path: "/resume-builder",
    },
    {
      name: "ATS Checker",
      icon: "🎯",
      path: "/ats-checker",
    },
    {
      name: "AI Match",
      icon: "🤖",
      path: "/job-match",
    },
    {
      name: "Interview Prep",
      icon: "🎤",
      path: "/interview-prep",
    },
    {
      name: "Applications",
      icon: "📨",
      path: "/applications",
    },
    {
      name: "Profile",
      icon: "👤",
      path: "/profile",
    },
    {
      name: "Settings",
      icon: "⚙️",
      path: "/settings",
    },
  ];

  return (
    <aside
      className={`sidebar ${
        collapsed
          ? "sidebar-collapsed"
          : ""
      }`}
    >
      <div className="sidebar-top">

        <div className="sidebar-logo">
          {collapsed
            ? "AI"
            : "AI Job Portal"}
        </div>

        <button
          className="toggle-btn"
          onClick={() =>
            setCollapsed(!collapsed)
          }
        >
          {collapsed ? "☰" : "✕"}
        </button>

      </div>

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <span>{item.icon}</span>

            {!collapsed && (
              <span>{item.name}</span>
            )}
          </NavLink>
        ))}
      </div>

      <div className="sidebar-footer">
        {!collapsed && (
          <>
            <h4>Profile Completion</h4>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: "78%",
                }}
              />
            </div>

            <p>78% Completed</p>
          </>
        )}
      </div>
    </aside>
  );
}