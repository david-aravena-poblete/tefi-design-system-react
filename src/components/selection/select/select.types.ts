import type {
    SelectHTMLAttributes,
  } from "react";
  
  import type {
    FieldState,
  } from "../../../primitives/field";
  
  import {
    FIELD_SIZES,
  } from "../../../shared/field.constants";
  
  /* ======================================
     SELECT SIZE
  ====================================== */
  
  export type SelectSize =
    typeof FIELD_SIZES[number];
  
  /* ======================================
     SELECT PROPS
  ====================================== */
  
  export interface SelectProps
    extends SelectHTMLAttributes<HTMLSelectElement> {
  
    selectSize?: SelectSize;
  
    state?: FieldState;
  
    loading?: boolean;
  }