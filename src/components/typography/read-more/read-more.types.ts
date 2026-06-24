/* ======================================
   IMPORTS
====================================== */

import type {
    HTMLAttributes,
    ReactNode,
  } from "react";
  
  /* ======================================
     PROPS
  ====================================== */
  
  export interface ReadMoreProps
    extends HTMLAttributes<HTMLDivElement> {
  
    children?: ReactNode;
  
    lines?: number;
  
    expandLabel?: string;
  
    collapseLabel?: string;
  }