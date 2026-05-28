/* ======================================
   IMPORTS
====================================== */

import "./error-message.css";

import type { ErrorMessageProps } from "./error-message.types";

/* ======================================
   ERROR MESSAGE
====================================== */

export function ErrorMessage({
  size = "md",

  children,

  className = "",

  ...rest
}: ErrorMessageProps) {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "error-message",

    `error-message--${size}`,

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

      role="alert"

      {...rest}
    >
      {children}
    </p>
  );
}