/* ======================================
   IMPORTS
====================================== */

import { useId } from "react";
import "./form-field.css";
import { FormFieldProvider } from "./form-field.context";
import type { FormFieldProps } from "./form-field.types";

/* ======================================
   FORM FIELD
====================================== */

export function FormField({
  state = "default",

  disabled = false,

  children,

  className = "",

  ...rest
}: FormFieldProps) {

  /* ======================================
     IDS
  ====================================== */

  const generatedId =
    useId();

  const inputId =
    `${generatedId}-input`;

  const helperTextId =
    `${generatedId}-helper`;

  const errorMessageId =
    `${generatedId}-error`;

  /* ======================================
     DESCRIBED BY
  ====================================== */

  const describedBy =
    state === "error"
      ? errorMessageId
      : helperTextId;

  /* ======================================
     CONTEXT
  ====================================== */

  const contextValue = {
    id: inputId,

    helperTextId,

    errorMessageId,

    describedBy,

    state,

    disabled,
  };

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "form-field",

    `form-field--${state}`,

    disabled &&
      "form-field--disabled",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     RENDER
  ====================================== */

  return (
    <FormFieldProvider
      value={contextValue}
    >
      <div
        className={classes}

        {...rest}
      >
        {children}
      </div>
    </FormFieldProvider>
  );
}