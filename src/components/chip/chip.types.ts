/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps, ReactNode } from "react";

import type { Size } from "@/foundations/design-system.types";

/* ======================================
   PROPS
====================================== */

export interface ChipProps extends ComponentProps<"div"> {
  children?: ReactNode;

  startIcon?: ReactNode;

  endIcon?: ReactNode;

  size?: Size;

  disabled?: boolean;

  removable?: boolean;

  onRemove?: () => void;
}