/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentProps,
  ElementType,
} from "react";

/* ======================================
   TYPES
====================================== */

export type SectionSize =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl";

/* ======================================
   PROPS
====================================== */

export interface SectionProps
  extends ComponentProps<"section"> {

  as?: ElementType;

  size?: SectionSize;

}