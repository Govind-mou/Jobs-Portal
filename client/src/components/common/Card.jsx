import { useState } from "react";
import "./Card.css";

export default function Card({
  title,
  subtitle,
  icon,
  children,
  footer,
  variant = "default",
  hover = true,
  loading = false,
  collapsible = false,
  badge,
  actions,
}) {
  const [collapsed, setCollapsed] = useState(false);

  if (loading) {
    return (
      <div className="card card-loading">
        <div className="skeleton title"></div>
        <div className="skeleton line"></div>
        <div className="skeleton line"></div>
        <div className="skeleton line"></div>
      </div>
    );
  }

  return (
    <div
      className={`card card-${variant} ${
        hover ? "card-hover" : ""
      }`}
    >
      {(title || icon || badge || actions) && (
        <div className="card-header">
          <div className="card-header-left">
            {icon && (
              <div className="card-icon">
                {icon}
              </div>
            )}

            <div>
              {title && (
                <h3 className="card-title">
                  {title}
                </h3>
              )}

              {subtitle && (
                <p className="card-subtitle">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="card-header-right">
            {badge && (
              <span className="card-badge">
                {badge}
              </span>
            )}

            {collapsible && (
              <button
                className="collapse-btn"
                onClick={() =>
                  setCollapsed(!collapsed)
                }
              >
                {collapsed ? "+" : "-"}
              </button>
            )}

            {actions}
          </div>
        </div>
      )}

      {!collapsed && (
        <div className="card-body">
          {children}
        </div>
      )}

      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
}