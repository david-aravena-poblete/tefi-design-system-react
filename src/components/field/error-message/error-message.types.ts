/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentProps,
} from "react";

/* ======================================
   ERROR MESSAGE SIZE
====================================== */

export type ErrorMessageSize =
  | "sm"
  | "md"
  | "lg";

/* ======================================
   ERROR MESSAGE PROPS
====================================== */

export interface ErrorMessageProps
  extends ComponentProps<"p"> {

  size?: ErrorMessageSize;

}