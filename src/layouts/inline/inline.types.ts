/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps, ElementType } from "react";

import type { Align, Justify, Spacing } from "../../foundations/design-system.types";

/* ======================================
   PROPS
====================================== */

export interface InlineProps extends ComponentProps<"div"> {
  as?: ElementType;

  gap?: Spacing;

  align?: Align;

  justify?: Justify;

  wrap?: boolean;
}
