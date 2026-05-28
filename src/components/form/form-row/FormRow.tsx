/* ======================================
   IMPORTS
====================================== */

import "./form-row.css";
import type { FormRowProps } from "./form-row.types";

/* ======================================
   FORM ROW
====================================== */

export function FormRow({
  children,

  className = "",

  ...rest
}: FormRowProps) {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "form-row",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div
      className={classes}

      {...rest}
    >
      {children}
    </div>
  );
}