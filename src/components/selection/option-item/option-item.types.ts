/* ======================================
   IMPORTS
====================================== */

import type {
    HTMLAttributes,
    ReactNode,
  } from "react";
  
  /* ======================================
     OPTION ITEM PROPS
  ====================================== */
  
  export interface OptionItemProps
    extends Omit<
      HTMLAttributes<HTMLDivElement>,
      "children"
    > {
  
    label: ReactNode;
  
    selected?: boolean;
  
    active?: boolean;
  
    disabled?: boolean;
  }