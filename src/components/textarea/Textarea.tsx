/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./textarea.css";

import { Field } from "@/primitives/field";

import { useFormField } from "@/components/form/form-field/form-field.context";

import type { TextareaProps } from "./textarea.types";

/* ======================================
   TEXTAREA
====================================== */

export function Textarea({
  /* ======================================
     TEFI PROPS
  ====================================== */

  size = "md",

  state = "default",

  loading = false,

  /* ======================================
     REACT PROPS
  ====================================== */

  disabled = false,

  className,

  ref,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: TextareaProps) {
  /* ======================================
     FORM FIELD
  ====================================== */

  const field = useFormField();

  /* ======================================
     DERIVED
  ====================================== */

  const resolvedId = rest.id ?? field?.id;

  const resolvedState = state !== "default" ? state : (field?.state ?? "default");

  const resolvedDisabled = field?.disabled || disabled;

  const resolvedDescribedBy = rest["aria-describedby"] ?? field?.describedBy;

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "textarea",

    `textarea--${size}`,

    `textarea--${resolvedState}`,

    {
      "textarea--disabled": resolvedDisabled,

      "textarea--loading": loading,
    },

    className,
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <Field state={resolvedState} disabled={resolvedDisabled} loading={loading}>
      <textarea
        {...rest}

        ref={ref}

        id={resolvedId}

        aria-describedby={resolvedDescribedBy}

        className={classes}

        disabled={resolvedDisabled}
      />
    </Field>
  );
}
