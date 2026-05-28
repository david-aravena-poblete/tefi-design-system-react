/* ======================================
   IMPORTS
====================================== */

import "./field.css";
import { Spinner } from "../spinner";
import type { FieldProps } from "./field.types";

/* ======================================
   FIELD
====================================== */

export function Field({
  children,

  state = "default",

  disabled = false,

  loading = false,

  className = "",
}: FieldProps) {

  return (
    <div
      className={[
        "field",
        className,
      ]
        .filter(Boolean)
        .join(" ")}

      data-state={state}

      data-disabled={
        disabled || undefined
      }

      data-loading={
        loading || undefined
      }
    >
      {children}

      {loading && (
        <span className="field__spinner">
          <Spinner size="sm" />
        </span>
      )}
    </div>
  );
}