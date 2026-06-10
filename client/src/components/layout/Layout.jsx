import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layout({
  children,
  pageTitle = "",
}) {
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(
      localStorage.getItem("theme") ===
        "dark"
    );

  const [loading, setLoading] =
    useState(false);

  // Theme

  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // Scroll Top

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  // Route Loader

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Dynamic Title

  useEffect(() => {
    if (pageTitle) {
      document.title =
        `${pageTitle} | AI Job Portal`;
    } else {
      document.title =
        "AI Job Portal";
    }
  }, [pageTitle]);

  const breadcrumbs =
    location.pathname
      .split("/")
      .filter(Boolean);

  return (
    <div
      className={`app-layout ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      {/* Mobile Overlay */}

      {mobileMenu && (
        <div
          className="mobile-overlay"
          onClick={() =>
            setMobileMenu(false)
          }
        />
      )}

      {/* Sidebar */}

      <Sidebar
        isOpen={sidebarOpen}
        mobileOpen={mobileMenu}
        closeMobile={() =>
          setMobileMenu(false)
        }
      />

      {/* Main Content */}

      <div
        className={`main-section ${
          !sidebarOpen
            ? "sidebar-collapsed"
            : ""
        }`}
      >
        {/* Header */}

        <Header
          sidebarOpen={sidebarOpen}
          toggleSidebar={() =>
            setSidebarOpen(
              (prev) => !prev
            )
          }
          toggleMobileMenu={() =>
            setMobileMenu(
              (prev) => !prev
            )
          }
          darkMode={darkMode}
          setDarkMode={
            setDarkMode
          }
        />

        {/* Top Navigation */}

        <div className="layout-topbar">

          <div className="breadcrumbs">

            <span>🏠 Home</span>

            {breadcrumbs.map(
              (
                crumb,
                index
              ) => (
                <span
                  key={index}
                >
                  {" > "}
                  {crumb
                    .replace(
                      /-/g,
                      " "
                    )
                    .replace(
                      /\b\w/g,
                      (char) =>
                        char.toUpperCase()
                    )}
                </span>
              )
            )}

          </div>

          <div className="topbar-actions">

            <button>
              🔔
            </button>

            <button>
              💬
            </button>

            <button
              onClick={() =>
                setDarkMode(
                  !darkMode
                )
              }
            >
              {darkMode
                ? "☀️"
                : "🌙"}
            </button>

          </div>

        </div>

        {/* Route Loader */}

        {loading && (
          <div className="route-loader">
            <div className="loader-bar" />
          </div>
        )}

        {/* Page Content */}

        <main className="page-content">
          {children}
        </main>

        {/* Footer */}

        <Footer />
      </div>
    </div>
  );
}