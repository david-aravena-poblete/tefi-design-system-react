/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import type { Size } from "@/foundations/design-system.types";

/* ======================================
   TYPES
====================================== */

export type ChipSize = Extract<
  Size,
  "sm" | "md" 
>;

export type ChipVariant =
  | "solid"
  | "outline";

/* ======================================
   PROPS
====================================== */

export interface ChipProps
  extends Omit<
    ComponentPropsWithoutRef<"div">,
    "children" | "color"
  > {

  children?: ReactNode;

  startIcon?: ReactNode;
  endIcon?: ReactNode;

  removable?: boolean;
  onRemove?: () => void;

  size?: ChipSize;
  variant?: ChipVariant;
}