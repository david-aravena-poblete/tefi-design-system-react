/* ======================================
   IMPORTS
====================================== */

import type { Color } from "../tokens";

/* ======================================
   TYPES
====================================== */

export type Press = "move";
export type Transition = "fast";

/* ======================================
   INTERACTION PROPS
====================================== */

export interface InteractionProps {
  hover?: Color;
  press?: Press;
  focusRing?: Color;
  transition?: Transition;
}