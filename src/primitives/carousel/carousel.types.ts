/* ======================================
   IMPORTS
====================================== */

import type { ReactNode } from "react";

import type { Size } from "@/laboratory/types";

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
  maxHeight?: Size;
}