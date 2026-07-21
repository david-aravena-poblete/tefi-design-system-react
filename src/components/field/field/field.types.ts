/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps, JSX } from "react";

import type { LabelProps } from "../label";

import type { HelperTextProps } from "../helper-text";

import type { ErrorMessageProps } from "../error-message";

/* ======================================
   FIELD
====================================== */

export type FieldProps = ComponentProps<"div">;

/* ======================================
   COMPOUND COMPONENT
====================================== */

export interface FieldComponent {
  (props: FieldProps): JSX.Element;

  Label: (props: LabelProps) => JSX.Element;

  HelperText: (props: HelperTextProps) => JSX.Element;

  ErrorMessage: (props: ErrorMessageProps) => JSX.Element;
}
