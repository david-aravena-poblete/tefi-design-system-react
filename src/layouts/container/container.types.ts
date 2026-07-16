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

export type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

/* ======================================
   PROPS
====================================== */

export interface ContainerProps
  extends ComponentProps<"div"> {

  as?: ElementType;

  size?: ContainerSize;

  paddingTop?: Spacing;

  paddingBottom?: Spacing;

}