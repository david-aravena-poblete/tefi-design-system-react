/* ======================================
   IMPORTS
====================================== */

import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { SIZES } from "../../shared/constants";

/* ======================================
   VARIANTS
====================================== */

const BUTTON_VARIANTS = [
  "primary",
  "secondary",
  "ghost",
  "link",
  "danger",
] as const;

/* ======================================
   TYPES
====================================== */

export type ButtonVariant =
  (typeof BUTTON_VARIANTS)[number];

export type ButtonSize =
  (typeof SIZES)[number];

/* ======================================
   PROPS
====================================== */

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  children?: ReactNode;

  startIcon?: ReactNode;

  endIcon?: ReactNode;

  variant?: ButtonVariant;

  size?: ButtonSize;

  fullWidth?: boolean;

  loading?: boolean;

  skeleton?: boolean;

}