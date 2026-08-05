/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps } from "react";
import type { IconName } from "./icons/icons.registry";

/* ======================================
   TYPES
====================================== */

export type IconSize =
  | "sm"
  | "md"
  | "lg";

/* ======================================
   PROPS
====================================== */

export interface IconProps extends ComponentProps<"svg"> {
  name?: IconName;

  size?: IconSize;

  ariaHidden?: boolean;
}