import type {
    InputHTMLAttributes,
    ReactNode,
  } from "react";
  
  import type {
    FieldState,
  } from "../field";
  
  import {
    FIELD_SIZES,
  } from "../../shared/field.constants";
  
  /* ======================================
     CONTROL SIZE
  ====================================== */
  
  export type ControlSize =
    typeof FIELD_SIZES[number];
  
  /* ======================================
     CONTROL SHAPE
  ====================================== */
  
  export type ControlShape =
    | "square"
    | "circle"
    | "pill";
  
  /* ======================================
     CONTROL PROPS
  ====================================== */
  
  export interface ControlProps
    extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size"
    > {
  
    type?: "checkbox" | "radio";
  
    state?: FieldState;
  
    shape?: ControlShape;
  
    size?: ControlSize;
  
    renderControl?: () => ReactNode;
  
    children?: ReactNode;
  
    className?: string;
  }