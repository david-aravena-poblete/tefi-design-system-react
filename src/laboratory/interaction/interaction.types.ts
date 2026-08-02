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
   COMPOSITION
====================================== */

export interface Composition {
  background?: Color;
  border?: Color;
  color?: Color;
}

/* ======================================
   INTERACTION PROPS
====================================== */

export interface InteractionProps {
  hover?: Composition;
  press?: Press;
  focusRing?: Color;
  transition?: Transition;
}