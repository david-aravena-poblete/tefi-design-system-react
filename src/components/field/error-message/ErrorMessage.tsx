/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./error-message.css";

import type { ErrorMessageProps } from "./error-message.types";

/* ======================================
   ERROR MESSAGE
====================================== */

export function ErrorMessage({
  /* ======================================
     TEFI PROPS
  ====================================== */

  size = "md",

  /* ======================================
     REACT PROPS
  ====================================== */

  children,

  className,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: ErrorMessageProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "error-message",

    `error-message--${size}`,

    className,
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <p className={classes} role="alert" {...rest}>
      {children}
    </p>
  );
}
