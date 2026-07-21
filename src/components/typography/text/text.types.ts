/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps } from "react";

import type { FontSize } from "@/foundations/design-system.types";

/* ======================================
   TYPES
====================================== */

export type TextVariant = "default" | "secondary" | "muted" | "inverse";

/* ======================================
   PROPS
====================================== */

export interface TextProps extends ComponentProps<"p"> {
  size?: FontSize;

  variant?: TextVariant;

  skeleton?: boolean;

  expandable?: boolean;

  lines?: number;

  expandLabel?: string;

  collapseLabel?: string;
}
