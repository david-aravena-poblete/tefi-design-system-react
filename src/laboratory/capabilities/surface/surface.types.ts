/* ======================================
   IMPORTS
====================================== */

import type {
    Background,
    Border,
    BorderStyle,
    BorderWidth,
    Radius,
    Text,
  } from "@/laboratory/types";
  
  /* ======================================
     SURFACE PROPS
  ====================================== */
  
  export interface SurfaceProps {
    background?: Background;
  
    text?: Text;
  
    border?: Border;
  
    borderWidth?: BorderWidth;
  
    borderStyle?: BorderStyle;
  
    radius?: Radius;
  }