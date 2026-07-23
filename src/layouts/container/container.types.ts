/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps, ElementType } from "react";

/* ======================================
   TYPES
====================================== */

export type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

/* ======================================
   PROPS
====================================== */

export interface ContainerProps extends ComponentProps<"div"> {
  as?: ElementType;

  size?: ContainerSize;
}