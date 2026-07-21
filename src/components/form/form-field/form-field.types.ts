import type { HTMLAttributes, ReactNode } from "react";

/* ======================================
     FORM FIELD STATE
  ====================================== */

export type FormFieldState = "default" | "error" | "success" | "warning";

/* ======================================
     FORM FIELD PROPS
  ====================================== */

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  state?: FormFieldState;

  disabled?: boolean;

  children?: ReactNode;
}
