/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps } from "react";

/* ======================================
   LABEL SIZE
====================================== */

export type LabelSize = "sm" | "md" | "lg";

/* ======================================
   LABEL PROPS
====================================== */

export interface LabelProps extends ComponentProps<"label"> {
  size?: LabelSize;

  required?: boolean;
}
