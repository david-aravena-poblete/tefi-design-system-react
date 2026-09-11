/* ======================================
   IMPORTS
====================================== */

import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

/* ======================================
   RADIO PROPS
====================================== */

export type RadioSize = "sm" | "md" | "lg";

export interface RadioProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "type"
  > {
  size?: RadioSize;

  children?: ReactNode;
}