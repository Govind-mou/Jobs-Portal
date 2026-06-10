import {
  forwardRef,
  useState,
  useEffect,
} from "react";

import "./Input.css";

const Input = forwardRef(
  (
    {
      label,
      name,
      value = "",
      onChange,

      error,
      helperText,

      leftIcon,
      rightIcon,

      type = "text",

      required = false,
      disabled = false,

      loading = false,

      showCounter = false,
      maxLength,

      clearable = false,

      fullWidth = true,
      className = "",

      success = false,

      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] =
      useState(false);

    const [passwordStrength, setPasswordStrength] =
      useState("");

    const inputType =
      type === "password"
        ? showPassword
          ? "text"
          : "password"
        : type;

    useEffect(() => {
      if (type !== "password") return;

      if (value.length < 6)
        setPasswordStrength("Weak");
      else if (value.length < 10)
        setPasswordStrength("Medium");
      else setPasswordStrength("Strong");
    }, [value, type]);

    const handleClear = () => {
      if (!onChange) return;

      onChange({
        target: {
          name,
          value: "",
        },
      });
    };

    return (
      <div
        className={`input-wrapper ${
          fullWidth
            ? "full-width"
            : ""
        }`}
      >
        {label && (
          <label
            htmlFor={name}
            className="input-label"
          >
            {label}

            {required && (
              <span className="required">
                *
              </span>
            )}
          </label>
        )}

        <div
          className={`input-container ${
            error
              ? "has-error"
              : ""
          } ${
            success
              ? "has-success"
              : ""
          }`}
        >
          {leftIcon && (
            <span className="input-icon left">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={name}
            name={name}
            value={value}
            disabled={disabled}
            type={inputType}
            onChange={onChange}
            maxLength={maxLength}
            autoComplete="on"
            aria-invalid={!!error}
            className={`custom-input ${className}`}
            {...props}
          />

          {loading && (
            <span className="input-loader">
              ⏳
            </span>
          )}

          {clearable && value && (
            <button
              type="button"
              className="clear-btn"
              onClick={handleClear}
            >
              ✕
            </button>
          )}

          {type === "password" && (
            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              {showPassword
                ? "🙈"
                : "👁️"}
            </button>
          )}

          {!loading &&
            rightIcon && (
              <span className="input-icon right">
                {rightIcon}
              </span>
            )}
        </div>

        {type === "password" &&
          value && (
            <div className="password-strength">
              Strength:
              <strong>
                {passwordStrength}
              </strong>
            </div>
          )}

        {showCounter &&
          maxLength && (
            <div className="character-counter">
              {value.length}/
              {maxLength}
            </div>
          )}

        {helperText &&
          !error && (
            <small className="helper-text">
              {helperText}
            </small>
          )}

        {error && (
          <small className="error-text">
            {error}
          </small>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;