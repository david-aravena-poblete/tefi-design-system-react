import type {
    ReactNode,
    InputHTMLAttributes,
  } from "react";
  
  import type {
    FieldState,
  } from "../../../../primitives/field";
  
  /* ======================================
     RADIO SIZE
  ====================================== */
  
  export type RadioSize =
    | "sm"
    | "md"
    | "lg";
  
  /* ======================================
     RADIO PROPS
  ====================================== */
  
  export interface RadioProps
    extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "type"
    > {
  
    state?: FieldState;
  
    size?: RadioSize;
  
    children?: ReactNode;
  }