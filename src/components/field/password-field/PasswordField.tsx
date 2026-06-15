/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import "./password-field.css";
import { Input } from "@/components/field";
import type { PasswordFieldProps } from "./password-field.types";

/* ======================================
   PASSWORD FIELD
====================================== */

export function PasswordField({
  endIcon,
  ...rest
}: PasswordFieldProps) {

  /* ======================================
     VISIBILITY
  ====================================== */

  const [visible, setVisible] =
    useState(false);

  /* ======================================
     TOGGLE
  ====================================== */

  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  /* ======================================
     RENDER
  ====================================== */

  return (
    <Input
      type={
        visible
          ? "text"
          : "password"
      }

      endIcon={
        endIcon ?? (
          <button
            type="button"

            className="
              password-field__toggle
            "

            onMouseDown={(e) => {
              e.preventDefault();
            }}

            onClick={handleToggle}

            aria-label={
              visible
                ? "Hide password"
                : "Show password"
            }
          >
            {visible ? (
              <Eye size={16} />
            ) : (
              <EyeClosed size={16} />
            )}
          </button>
        )
      }

      {...rest}
    />
  );
}