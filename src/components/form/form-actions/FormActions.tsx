/* ======================================
   IMPORTS
====================================== */

import "./form-actions.css";
import type { FormActionsProps } from "./form-actions.types";

/* ======================================
   FORM ACTIONS
====================================== */

export function FormActions({
  children,

  className = "",
}: FormActionsProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = ["form-actions", className].filter(Boolean).join(" ");

  /* ======================================
     RENDER
  ====================================== */

  return <div className={classes}>{children}</div>;
}
