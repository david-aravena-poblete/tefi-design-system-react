import type { HTMLAttributes } from "react";

/* ======================================
     PROPS
  ====================================== */

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}
