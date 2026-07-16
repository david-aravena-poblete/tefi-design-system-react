/* ======================================
   IMPORTS
====================================== */

import {
  useState,
} from "react";

import {
  Eye,
  EyeClosed,
} from "lucide-react";

import "./password-field.css";

import {
  Input,
} from "@/components/input";

import type {
  PasswordFieldProps,
} from "./password-field.types";

/* ======================================
   PASSWORD FIELD
====================================== */

export function PasswordField({

  /* ======================================
     TEFI PROPS
  ====================================== */

  endIcon,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest

}: PasswordFieldProps) {

  /* ======================================
     STATE
  ====================================== */

  const [visible, setVisible] =
    useState(false);

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

        endIcon ??

        (

          <button
            type="button"
            className="password-field__toggle"
            onMouseDown={(event) => {

              event.preventDefault();

            }}
            onClick={() => {

              setVisible((previous) => !previous);

            }}
            aria-label={
              visible
                ? "Hide password"
                : "Show password"
            }
          >

            {visible
              ? <Eye size={16} />
              : <EyeClosed size={16} />
            }

          </button>

        )

      }
      {...rest}
    />

  );

}