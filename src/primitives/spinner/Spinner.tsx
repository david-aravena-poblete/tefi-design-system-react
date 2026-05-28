import clsx from "clsx";
import "./spinner.css";
import type { SpinnerSize } from "./spinner.types";

/* ======================================
   TYPES
====================================== */

interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

/* ======================================
   SPINNER
====================================== */

export function Spinner({
  size = "md",
  className,
}: SpinnerProps) {

  const classes = clsx(
    "spinner",
    `spinner--${size}`,
    className
  );

  return (
    <div
      className={classes}
      aria-label="Loading"
      role="status"
    />
  );
}