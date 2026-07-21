/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps } from "react";

import type { Size } from "@/foundations/design-system.types";

/* ======================================
   PROPS
====================================== */

export interface SpinnerProps extends ComponentProps<"div"> {
  size?: Size;
}
