import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

/* ======================================
   CHECKBOX SIZE
====================================== */

export type CheckboxSize = "sm" | "md" | "lg";

/* ======================================
   CHECKBOX PROPS
====================================== */

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "type"
  > {
  size?: CheckboxSize;

  children?: ReactNode;
}