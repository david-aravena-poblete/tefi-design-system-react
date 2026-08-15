/* ======================================
   IMPORTS
====================================== */

import type { Background, Border, Shadow, Text } from "./surface.types";

/* ======================================
    PRESS
 ====================================== */

export type Press = "move";

/* ======================================
    TRANSITION
 ====================================== */

export type Transition = "fast";

/* ======================================
    HOVER
 ====================================== */

export interface Hover {
  background?: Background;

  border?: Border;

  text?: Text;

  shadow?: Shadow;
}
