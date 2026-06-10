import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,

  fullWidth = false,

  leftIcon,
  rightIcon,

  onClick,

  navigateTo,

  confirm = false,
  confirmMessage = "Are you sure?",

  tooltip = "",

  successText,
  errorText,

  className = "",
}) {
  const navigate = useNavigate();

  const [localLoading, setLocalLoading] =
    useState(false);

  const [status, setStatus] =
    useState("");

  const handleClick = async (e) => {
    try {
      if (confirm) {
        const approved =
          window.confirm(
            confirmMessage
          );

        if (!approved) return;
      }

      if (navigateTo) {
        navigate(navigateTo);
        return;
      }

      if (!onClick) return;

      setLocalLoading(true);

      const result =
        onClick(e);

      if (
        result instanceof Promise
      ) {
        await result;
      }

      if (successText) {
        setStatus("success");

        setTimeout(() => {
          setStatus("");
        }, 3000);
      }
    } catch (error) {
      console.error(error);

      if (errorText) {
        setStatus("error");

        setTimeout(() => {
          setStatus("");
        }, 3000);
      }
    } finally {
      setLocalLoading(false);
    }
  };

  const isLoading =
    loading || localLoading;

  const classes = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth
      ? "btn-full"
      : "",
    isLoading
      ? "btn-loading"
      : "",
    status === "success"
      ? "btn-success-state"
      : "",
    status === "error"
      ? "btn-error-state"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      title={tooltip}
      disabled={
        disabled || isLoading
      }
      className={classes}
      onClick={handleClick}
    >
      {isLoading ? (
        <>
          <span className="spinner" />
          Processing...
        </>
      ) : (
        <>
          {leftIcon && (
            <span className="btn-icon">
              {leftIcon}
            </span>
          )}

          <span>
            {status === "success"
              ? successText
              : status === "error"
              ? errorText
              : children}
          </span>

          {rightIcon && (
            <span className="btn-icon">
              {rightIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
}