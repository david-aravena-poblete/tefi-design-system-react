/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./input.css";

import { Field } from "@/primitives/field";

import { useFormField } from "@/components/form/form-field/form-field.context";

import type { InputProps } from "./input.types";

/* ======================================
   INPUT
====================================== */

export function Input({
  /* ======================================
     TEFI PROPS
  ====================================== */

  size = "md",

  state = "default",

  loading = false,

  startIcon,

  endIcon,

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
}: InputProps) {
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

  const hasPrefix = Boolean(startIcon);

  const hasSuffix = Boolean(endIcon);

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "input",

    `input--${size}`,

    `input--${resolvedState}`,

    {
      "input--has-prefix": hasPrefix,

      "input--has-suffix": hasSuffix,

      "input--disabled": resolvedDisabled,

      "input--loading": loading,
    },

    className,
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <Field state={resolvedState} disabled={resolvedDisabled} loading={loading}>
      <div className="input__wrapper">
        {hasPrefix && <span className="input__prefix">{startIcon}</span>}

        <input
          {...rest}

          ref={ref}

          id={resolvedId}

          aria-describedby={resolvedDescribedBy}

          className={classes}

          disabled={resolvedDisabled}
        />

        {hasSuffix && <span className="input__suffix">{endIcon}</span>}
      </div>
    </Field>
  );
}
