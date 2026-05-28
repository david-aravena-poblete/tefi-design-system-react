/* ======================================
   IMPORTS
====================================== */

import type { HTMLAttributes, ReactNode } from "react";
import { FIELD_SIZES } from "../../shared/field.constants";
  
  /* ======================================
     CHIP SIZE
  ====================================== */
  
  export type ChipSize =
    typeof FIELD_SIZES[number];
  
  /* ======================================
     CHIP PROPS
  ====================================== */
  
  export interface ChipProps
    extends Omit<
      HTMLAttributes<HTMLDivElement>,
      "children"
    > {
  
    label: ReactNode;
  
    size?: ChipSize;
  
    disabled?: boolean;
  
    removable?: boolean;
  
    onRemove?: () => void;
  }