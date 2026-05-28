/* ======================================
   IMPORTS
====================================== */

import "./helper-text.css";
import type { HelperTextProps } from "./helper-text.types";

/* ======================================
   HELPER TEXT
====================================== */

export function HelperText({
  size = "md",

  children,

  className = "",

  ...rest
}: HelperTextProps) {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "helper-text",

    `helper-text--${size}`,

    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     RENDER
  ====================================== */

  return (
    <p
      className={classes}

      {...rest}
    >
      {children}
    </p>
  );
}