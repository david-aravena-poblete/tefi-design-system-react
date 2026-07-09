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
  
  export interface SidebarContentProps
    extends HTMLAttributes<HTMLDivElement> {
  
    children?: ReactNode;
  
  }