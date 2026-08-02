/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps } from "react";

import type {
  FontSize,
  FontWeight,
} from "@/laboratory/tokens";

/* ======================================
   TYPES
====================================== */

export type HeadingElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

/* ======================================
   PROPS
====================================== */

export interface HeadingProps
  extends ComponentProps<"h1"> {
  as?: HeadingElement;

  size?: FontSize;

  weight?: FontWeight;
}