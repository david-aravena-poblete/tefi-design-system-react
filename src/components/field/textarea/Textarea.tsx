/* ======================================
   IMPORTS
====================================== */

import "./textarea.css";
import { Field } from "../../../primitives/field";
import { useFormField } from "../../form/form-field/form-field.context";
import type { TextareaProps } from "./textarea.types";

/* ======================================
   TEXTAREA
====================================== */

export function Textarea({
  textareaSize = "md",
  state = "default",
  disabled = false,
  loading = false,
  className = "",
  ...rest
}: TextareaProps) {

  /* ======================================
     FORM FIELD
  ====================================== */

  const field = useFormField();

  /* ======================================
     DERIVED
  ====================================== */

  const resolvedId =
    rest.id ??
    field?.id;

  const resolvedState =
    state !== "default"
      ? state
      : field?.state ?? "default";

  const resolvedDisabled =
    disabled ||
    field?.disabled ||
    false;

  const resolvedDescribedBy =
    rest["aria-describedby"] ??
    field?.describedBy;

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "textarea",

    `textarea--${textareaSize}`,

    `textarea--${resolvedState}`,

    resolvedDisabled &&
      "textarea--disabled",

    loading &&
      "textarea--loading",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     RENDER
  ====================================== */

  return (
    <Field
      state={resolvedState}

      disabled={resolvedDisabled}

      loading={loading}
    >
      <textarea
        id={resolvedId}

        aria-describedby={
          resolvedDescribedBy
        }

        className={classes}

        disabled={resolvedDisabled}

        {...rest}
      />
    </Field>
  );
}