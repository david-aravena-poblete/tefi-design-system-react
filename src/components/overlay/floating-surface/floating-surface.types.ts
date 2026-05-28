/* ======================================
   IMPORTS
====================================== */

import type {
    HTMLAttributes,
    ReactNode,
  } from "react";
  
  /* ======================================
     DROPDOWN SURFACE PROPS
  ====================================== */
  
  export interface FloatingSurfaceProps
    extends HTMLAttributes<HTMLDivElement> {
  
    children: ReactNode;
  
    open?: boolean;
  }