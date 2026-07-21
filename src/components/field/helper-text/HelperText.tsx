/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./helper-text.css";

import type { HelperTextProps } from "./helper-text.types";

/* ======================================
   HELPER TEXT
====================================== */

export function HelperText({
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
}: HelperTextProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "helper-text",

    `helper-text--${size}`,

    className,
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
}
