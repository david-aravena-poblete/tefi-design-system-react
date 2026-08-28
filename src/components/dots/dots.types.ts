/* ======================================
   IMPORTS
====================================== */

import type { HTMLAttributes } from "react";

/* ======================================
   DOTS PROPS
====================================== */

export interface DotsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  count: number;

  active: number;

  onChange: (index: number) => void;
}