/* ======================================
   IMPORTS
====================================== */

import "./label.css";
import type { LabelProps, } from "./label.types";

/* ======================================
   LABEL
====================================== */

export function Label({
  size = "md",

  required = false,

  children,

  className = "",

  ...rest
}: LabelProps) {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "label",

    `label--${size}`,

    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     RENDER
  ====================================== */

  return (
    <label
      className={classes}

      {...rest}
    >

      <span className="label__text">
        {children}
      </span>

      {required && (
        <span
          className="label__required"

          aria-hidden="true"
        >
          *
        </span>
      )}

    </label>
  );
}