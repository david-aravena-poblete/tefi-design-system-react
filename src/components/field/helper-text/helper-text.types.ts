/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentProps,
} from "react";

/* ======================================
   HELPER TEXT SIZE
====================================== */

export type HelperTextSize =
  | "sm"
  | "md"
  | "lg";

/* ======================================
   HELPER TEXT PROPS
====================================== */

export interface HelperTextProps
  extends ComponentProps<"p"> {

  size?: HelperTextSize;

}