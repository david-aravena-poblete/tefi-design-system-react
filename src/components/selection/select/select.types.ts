import type {
    SelectHTMLAttributes,
  } from "react";
  
  import type {
    FieldState,
  } from "../../../primitives/field";
  
  import {
    SIZES,
  } from "../../../shared/constants";
  
  /* ======================================
     SELECT SIZE
  ====================================== */
  
  export type SelectSize =
    typeof SIZES[number];
  
  /* ======================================
     SELECT PROPS
  ====================================== */
  
  export interface SelectProps
    extends SelectHTMLAttributes<HTMLSelectElement> {
  
    selectSize?: SelectSize;
  
    state?: FieldState;
  
    loading?: boolean;
  }