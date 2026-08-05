/* ======================================
   IMPORTS
====================================== */

import type {
   Align,
   Direction,
   Display,
   Justify,
   Size,
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
 
   width?: Size;
 
   minWidth?: Size;
 
   maxWidth?: Width;
 
   height?: Size;
 
   minHeight?: Size;
 
   maxHeight?: Size;
 }