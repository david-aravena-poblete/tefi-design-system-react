/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps, ElementType } from "react";

/* ======================================
   TYPES
====================================== */

export type SectionSize =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

/* ======================================
   PROPS
====================================== */

export interface SectionProps extends ComponentProps<"section"> {
  as?: ElementType;
  size?: SectionSize;
}