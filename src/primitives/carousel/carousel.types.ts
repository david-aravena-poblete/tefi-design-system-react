/* ======================================
   IMPORTS
====================================== */

import type { ReactNode } from "react";

/* ======================================
   TYPES
====================================== */

export type CarouselControls =
  | "overlay"
  | "outside";

/* ======================================
   PROPS
====================================== */

export interface CarouselProps {
  children: ReactNode;

  controls?: CarouselControls;
}