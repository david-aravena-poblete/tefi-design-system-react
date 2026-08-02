/* ======================================
   IMPORTS
====================================== */

import type {
    Align,
    Direction,
    Display,
    Height,
    Justify,
    Space,
    Width,
  } from "@/laboratory/types";
  
  /* ======================================
     LAYOUT PROPS
  ====================================== */
  
  export interface LayoutProps {
    display?: Display;
  
    direction?: Direction;
  
    align?: Align;
  
    justify?: Justify;
  
    between?: Space;
  
    inside?: Space;
  
    insideX?: Space;
  
    insideY?: Space;
  
    outside?: Space;
  
    maxWidth?: Width;
  
    minHeight?: Height;
  }