/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./field.css";

import { Stack } from "@/layouts/stack";

import { Label } from "./label";
import { HelperText } from "./helper-text";
import { ErrorMessage } from "./error-message";

import type {
  FieldComponent,
  FieldProps,
} from "./field.types";

/* ======================================
   FIELD
====================================== */

const FieldBase = ({
  children,

  className,

  ...props
}: FieldProps) => {

  const classes = clsx(
    "field",

    className,
  );

  return (

    <div
      className={classes}
      {...props}
    >

      <Stack gap="xs">

        {children}

      </Stack>

    </div>

  );

};

/* ======================================
   COMPOUND COMPONENT
====================================== */

export const Field =
  FieldBase as FieldComponent;

Field.Label = Label;

Field.HelperText = HelperText;

Field.ErrorMessage = ErrorMessage;