/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentProps,
  ReactNode,
} from "react";

import type {
  Size,
} from "../../foundations/design-system.types";

/* ======================================
   TYPES
====================================== */

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "link"
  | "danger";

/* ======================================
   PROPS
====================================== */

export interface ButtonProps
  extends ComponentProps<"button"> {

  variant?: ButtonVariant;

  size?: Size;

  fullWidth?: boolean;

  loading?: boolean;

  skeleton?: boolean;

  startIcon?: ReactNode;

  endIcon?: ReactNode;

}