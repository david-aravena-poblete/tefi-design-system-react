/* ======================================
   IMPORTS
====================================== */

import "./input.css";
import { Field } from "@/primitives/field";
import { useFormField } from "@/components/form/form-field/form-field.context";
import type { InputProps } from "./input.types";

/* ======================================
   INPUT
====================================== */

export function Input({
  inputSize = "md",

  state = "default",

  disabled = false,

  loading = false,

  startIcon,
  endIcon,

  className = "",

  ...rest
}: InputProps) {

  /* ======================================
     FORM FIELD
  ====================================== */

  const field =
    useFormField();

  /* ======================================
     DERIVED
  ====================================== */

  const resolvedId =
    rest.id ??
    field?.id;

  const resolvedState =
    state !== "default"
      ? state
      : field?.state ??
        "default";

  const resolvedDisabled =
    disabled ||
    field?.disabled ||
    false;

  const resolvedDescribedBy =
    rest["aria-describedby"] ??
    field?.describedBy;

  const hasPrefix =
    Boolean(startIcon);

  const hasSuffix =
    Boolean(endIcon);

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "input",

    `input--${inputSize}`,

    `input--${resolvedState}`,

    hasPrefix &&
      "input--has-prefix",

    hasSuffix &&
      "input--has-suffix",

    resolvedDisabled &&
      "input--disabled",

    loading &&
      "input--loading",

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

      <div className="input__wrapper">

        {/* START ICON */}

        {hasPrefix && (
          <span className="input__prefix">
            {startIcon}
          </span>
        )}

        {/* INPUT */}

        <input
          {...rest}

          id={resolvedId}

          aria-describedby={
            resolvedDescribedBy
          }

          className={classes}

          disabled={resolvedDisabled}
        />

        {/* END ICON */}

        {hasSuffix && (
          <span className="input__suffix">
            {endIcon}
          </span>
        )}

      </div>

    </Field>
  );
}