/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps, ElementType } from "react";

import type { Spacing } from "../../foundations/design-system.types";

/* ======================================
   PROPS
====================================== */

export interface InlineProps extends ComponentProps<"div"> {
  as?: ElementType;

  gap?: Spacing;
}