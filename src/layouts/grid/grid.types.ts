/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentProps,
  ElementType,
} from "react";

import type {
  Spacing,
} from "../../foundations/design-system.types";

/* ======================================
   TYPES
====================================== */

export type GridColumns =
  | 1
  | 2
  | 3
  | 4
  | 6
  | 12;

export type GridTemplate =
  | "auto-1fr-auto";

/* ======================================
   PROPS
====================================== */

export interface GridProps
  extends ComponentProps<"div"> {

  as?: ElementType;

  gap?: Spacing;

  columns?: GridColumns;

  template?: GridTemplate;

}