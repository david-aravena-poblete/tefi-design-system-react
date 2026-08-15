/* ======================================
   IMPORTS
====================================== */

import type { Hover, Press, Transition, Text } from "@/laboratory/types";

/* ======================================
    INTERACTION PROPS
 ====================================== */

export interface InteractionProps {
  hover?: Hover;

  press?: Press;

  focusRing?: Text;

  transition?: Transition;

  disabled?: boolean;
}
