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
  
  export interface ExpandableTextProps
    extends HTMLAttributes<HTMLDivElement> {
  
    children?: ReactNode;
  
    lines?: number;
  
    expandLabel?: string;
  
    collapseLabel?: string;
  }