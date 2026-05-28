import type {
    ReactNode,
    InputHTMLAttributes,
  } from "react";
  
  import type {
    FieldState,
  } from "../../../../primitives/field";
  
  /* ======================================
     CHECKBOX SIZE
  ====================================== */
  
  export type CheckboxSize =
    | "sm"
    | "md"
    | "lg";
  
  /* ======================================
     CHECKBOX PROPS
  ====================================== */
  
  export interface CheckboxProps
    extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "type"
    > {
  
    state?: FieldState;
  
    size?: CheckboxSize;
  
    children?: ReactNode;
  }