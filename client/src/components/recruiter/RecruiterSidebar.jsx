import {
  LayoutDashboard,
  Briefcase,
  Users,
  BarChart3,
  Brain,
  FileText,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function RecruiterSidebar() {
  const [collapsed, setCollapsed] =
    useState(false);

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/recruiter/dashboard",
    },
    {
      title: "Post Job",
      icon: <Briefcase size={20} />,
      path: "/recruiter/post-job",
    },
    {
      title: "Applicants",
      icon: <Users size={20} />,
      path: "/recruiter/applicants",
      badge: 24,
    },
    {
      title: "Analytics",
      icon: <BarChart3 size={20} />,
      path: "/recruiter/analytics",
    },
  ];

  const aiTools = [
    {
      title: "AI Screening",
      icon: <Brain size={20} />,
      path: "/recruiter/ai-screening",
    },
    {
      title: "Resume Parser",
      icon: <FileText size={20} />,
      path: "/recruiter/resume-parser",
    },
    {
      title: "Interview AI",
      icon: <MessageSquare size={20} />,
      path: "/recruiter/interview-ai",
    },
  ];

  return (
    <aside
      className={`recruiter-sidebar ${
        collapsed ? "collapsed" : ""
      }`}
    >
      {/* Logo */}

      <div className="sidebar-top">
        <div className="logo">
          <div className="logo-icon">
            AI
          </div>

          {!collapsed && (
            <div>
              <h2>RecruitAI</h2>
              <p>Recruiter Panel</p>
            </div>
          )}
        </div>

        <button
          className="collapse-btn"
          onClick={() =>
            setCollapsed(!collapsed)
          }
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      {/* Recruiter Profile */}

      {!collapsed && (
        <div className="profile-card">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Recruiter"
          />

          <h4>Sarah Johnson</h4>

          <p>Senior Recruiter</p>

          <span>
            Hiring for 12 Open Positions
          </span>
        </div>
      )}

      {/* Main Navigation */}

      <div className="sidebar-section">
        {!collapsed && (
          <h5>MAIN MENU</h5>
        )}

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
            {item.icon}

            {!collapsed && (
              <>
                <span>{item.title}</span>

                {item.badge && (
                  <span className="badge">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* AI TOOLS */}

      <div className="sidebar-section">
        {!collapsed && (
          <h5>AI TOOLS</h5>
        )}

        {aiTools.map((tool) => (
          <NavLink
            key={tool.path}
            to={tool.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            {tool.icon}

            {!collapsed && (
              <span>{tool.title}</span>
            )}
          </NavLink>
        ))}
      </div>

      {/* Stats */}

      {!collapsed && (
        <div className="sidebar-stats">
          <div>
            <h3>98%</h3>
            <p>AI Accuracy</p>
          </div>

          <div>
            <h3>245</h3>
            <p>Applicants</p>
          </div>
        </div>
      )}

      {/* Bottom Menu */}

      <div className="sidebar-bottom">
        <NavLink
          to="/notifications"
          className="sidebar-link"
        >
          <Bell size={20} />

          {!collapsed && (
            <>
              <span>Notifications</span>
              <span className="badge red">
                5
              </span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/settings"
          className="sidebar-link"
        >
          <Settings size={20} />

          {!collapsed && (
            <span>Settings</span>
          )}
        </NavLink>

        <button className="logout-btn">
          <LogOut size={20} />

          {!collapsed && (
            <span>Logout</span>
          )}
        </button>
      </div>
    </aside>
  );
}