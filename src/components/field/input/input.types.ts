import type { InputHTMLAttributes, ReactNode} from "react";
import type { FieldState} from "../../../primitives/field";

import {
  SIZES,
} from "../../../shared/constants";

/* ======================================
   INPUT SIZE
====================================== */

export type InputSize =
  typeof SIZES[number];

/* ======================================
   INPUT PROPS
====================================== */

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {

  inputSize?: InputSize;

  state?: FieldState;

  disabled?: boolean;

  loading?: boolean;

  startIcon?: ReactNode;

  endIcon?: ReactNode;

  className?: string;
}