/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentProps,
} from "react";

import type {
  Size,
  State,
} from "@/foundations/design-system.types";

/* ======================================
   PROPS
====================================== */

export interface TextareaProps
  extends Omit<
    ComponentProps<"textarea">,
    "size"
  > {

  size?: Size;

  state?: State;

  loading?: boolean;

}