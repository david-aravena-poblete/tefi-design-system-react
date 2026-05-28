/* ======================================
   IMPORTS
====================================== */

import { X } from "lucide-react";
import "./chip.css";
import type { ChipProps } from "./chip.types";

/* ======================================
   CHIP
====================================== */

export function Chip({
  label,

  size = "md",

  disabled = false,

  removable = false,

  onRemove,

  className = "",

  ...rest
}: ChipProps) {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "chip",

    `chip--${size}`,

    disabled &&
      "chip--disabled",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     REMOVE
  ====================================== */

  function handleRemove() {

    if (disabled) {
      return;
    }

    onRemove?.();
  }

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div
      className={classes}

      {...rest}
    >

      {/* LABEL */}

      <span className="chip__label">
        {label}
      </span>

      {/* REMOVE */}

      {removable && (
        <button
          type="button"

          className="
            chip__remove
          "

          onClick={handleRemove}

          disabled={disabled}

          aria-label="
            Remove item
          "
        >
          <X size={14} />
        </button>
      )}

    </div>
  );
}