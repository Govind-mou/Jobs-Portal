import { useEffect } from "react";
import "./Modal.css";

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  size = "md",
  closeOnOverlay = true,
}) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEsc
    );

    document.body.style.overflow =
      isOpen ? "hidden" : "auto";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEsc
      );

      document.body.style.overflow =
        "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={() => {
        if (closeOnOverlay) {
          onClose();
        }
      }}
    >
      <div
        className={`modal modal-${size}`}
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div className="modal-header">
          <div>
            <h2>{title}</h2>

            {subtitle && (
              <p>{subtitle}</p>
            )}
          </div>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="modal-content">
          {children}
        </div>

        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}