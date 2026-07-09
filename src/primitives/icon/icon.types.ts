/* ======================================
   IMPORTS
====================================== */

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { SIZES } from "../../shared/constants";

/* ======================================
   CHIP SIZE
====================================== */

export type ChipSize =
  (typeof SIZES)[number];

/* ======================================
   CHIP PROPS
====================================== */

export interface ChipProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "children"
  > {

  children?: ReactNode;

  size?: ChipSize;

  disabled?: boolean;

  removable?: boolean;

  onRemove?: () => void;

}