/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./spinner.css";

import type { SpinnerProps } from "./spinner.types";

/* ======================================
   SPINNER
====================================== */

export function Spinner({
  /* ======================================
     TEFI PROPS
  ====================================== */

  size = "md",

  /* ======================================
     REACT PROPS
  ====================================== */

  className,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: SpinnerProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "spinner",

    `spinner--${size}`,

    className,
  );

  /* ======================================
     RENDER
  ====================================== */

  return <div className={classes} role="status" aria-label="Loading" {...rest} />;
}
