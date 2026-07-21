import type { ReactNode, InputHTMLAttributes } from "react";

import type { FieldState } from "../../../primitives/field";

/* ======================================
   SWITCH SIZE
====================================== */

export type SwitchSize = "sm" | "md" | "lg";

/* ======================================
   SWITCH PROPS
====================================== */

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  state?: FieldState;

  size?: SwitchSize;

  thumb?: ReactNode;

  children?: ReactNode;
}
