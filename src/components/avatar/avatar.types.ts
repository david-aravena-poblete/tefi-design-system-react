/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps } from "react";

import type { Shape } from "@/foundations/design-system.types";

/* ======================================
   TYPES
====================================== */

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

/* ======================================
   PROPS
====================================== */

export interface AvatarProps extends ComponentProps<"span"> {
  src?: string;

  alt?: string;

  size?: AvatarSize;

  shape?: Shape;

  fallback?: ComponentProps<"span">["children"];
}
