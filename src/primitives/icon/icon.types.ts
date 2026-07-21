/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps } from "react";

import type { Size } from "@/foundations/design-system.types";

import type { IconName } from "./icons/icons.registry";

/* ======================================
   PROPS
====================================== */

export interface IconProps extends ComponentProps<"span"> {
  name?: IconName;

  size?: Size;

  ariaHidden?: boolean;
}
