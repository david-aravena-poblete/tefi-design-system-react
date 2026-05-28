/* ======================================
   IMPORTS
====================================== */

import "./select.css";
import { Field } from "../../../primitives/field";
import { useFormField } from "../../form/form-field/form-field.context";
import type { SelectProps } from "./select.types";

/* ======================================
   SELECT
====================================== */

export function Select({
  selectSize = "md",

  state = "default",

  disabled = false,

  loading = false,

  className = "",

  children,

  ...rest
}: SelectProps) {

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
    "select",

    `select--${selectSize}`,

    `select--${resolvedState}`,

    resolvedDisabled &&
      "select--disabled",

    loading &&
      "select--loading",

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

      className="select-wrapper"
    >
      <select
        id={resolvedId}

        aria-describedby={
          resolvedDescribedBy
        }

        className={classes}

        disabled={resolvedDisabled}

        {...rest}
      >
        {children}
      </select>

      {/* ARROW */}

      {!loading && (
        <span
          className="select__arrow"

          aria-hidden="true"
        >
          ▾
        </span>
      )}

    </Field>
  );
}