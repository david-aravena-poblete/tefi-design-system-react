/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentProps,
  CSSProperties,
} from "react";

import type {
  Aspect,
} from "../../foundations/design-system.types";

/* ======================================
   PROPS
====================================== */

export interface SkeletonProps
  extends ComponentProps<"div"> {

  fill?: boolean;

  width?: CSSProperties["width"];

  height?: CSSProperties["height"];

  radius?: CSSProperties["borderRadius"];

  animated?: boolean;

  aspect?: Aspect;

}