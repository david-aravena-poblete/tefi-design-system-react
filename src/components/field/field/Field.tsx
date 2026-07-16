/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./field.css";

import { Stack } from "@/layouts/stack";

import { Label } from "../label";
import { HelperText } from "../helper-text";
import { ErrorMessage } from "../error-message";

import type {
  FieldComponent,
  FieldProps,
} from "./field.types";

/* ======================================
   FIELD
====================================== */

const FieldBase = ({

  /* ======================================
     REACT PROPS
  ====================================== */

  children,

  className,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest

}: FieldProps) => {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(

    "field",

    className,

  );

  /* ======================================
     RENDER
  ====================================== */

  return (

    <div
      className={classes}
      {...rest}
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