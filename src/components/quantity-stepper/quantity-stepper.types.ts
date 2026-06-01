/* ======================================
   IMPORTS
====================================== */

import type { HTMLAttributes } from "react";
import { FIELD_SIZES } from "../../shared/field.constants";
  
  /* ======================================
     QUANTITY STEPPER SIZE
  ====================================== */
  
  export type QuantityStepperSize =
    typeof FIELD_SIZES[number];
  
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