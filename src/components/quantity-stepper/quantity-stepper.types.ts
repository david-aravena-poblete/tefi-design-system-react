/* ======================================
   IMPORTS
====================================== */

import type { HTMLAttributes } from "react";
import { SIZES } from "../../shared/constants";
  
  /* ======================================
     QUANTITY STEPPER SIZE
  ====================================== */
  
  export type QuantityStepperSize =
    typeof SIZES[number];
  
  /* ======================================
     QUANTITY STEPPER PROPS
  ====================================== */
  
  export interface QuantityStepperProps
    extends Omit<
      HTMLAttributes<HTMLDivElement>,
      "onChange"
    > {
  
    value?: number;
  
    defaultValue?: number;
  
    min?: number;
  
    max?: number;
  
    disabled?: boolean;
  
    size?: QuantityStepperSize;
  
    onChange?: (
      value: number
    ) => void;
  }