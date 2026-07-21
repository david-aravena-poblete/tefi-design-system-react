import "./form.css";
import type { FormProps } from "./form.types";

/* ======================================
   FORM
====================================== */

export function Form({ children, className = "", ...props }: FormProps) {
  const classes = ["form", className].filter(Boolean).join(" ");

  return (
    <form className={classes} {...props}>
      {children}
    </form>
  );
}
