/* ======================================
   IMPORTS
====================================== */

import type { ComponentPropsWithoutRef } from "react";
import type { Size } from "@/foundations/design-system.types";

/* ======================================
   TYPES
====================================== */

export type ButtonSize = Extract<
  Size,
  "sm" | "md"
>;

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "ghost"
  | "link";

/* ======================================
   PROPS
====================================== */

export interface ButtonProps
  extends Omit<
    ComponentPropsWithoutRef<"button">,
    "color"
  > {
  size?: ButtonSize;
  variant?: ButtonVariant;
}