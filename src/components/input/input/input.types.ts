/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentProps,
  ReactNode,
} from "react";

import type {
  Size,
  State,
} from "@/foundations/design-system.types";

/* ======================================
   INPUT PROPS
====================================== */

export interface InputProps
  extends Omit<
    ComponentProps<"input">,
    "size"
  > {

  /* ======================================
     TEFI PROPS
  ====================================== */

  size?: Size;

  state?: State;

  loading?: boolean;

  startIcon?: ReactNode;

  endIcon?: ReactNode;

}