import type {
    HTMLAttributes,
    ReactNode,
  } from "react";
  
  /* ======================================
     HELPER TEXT SIZE
  ====================================== */
  
  export type HelperTextSize =
    | "sm"
    | "md"
    | "lg";
  
  /* ======================================
     HELPER TEXT PROPS
  ====================================== */
  
  export interface HelperTextProps
    extends HTMLAttributes<HTMLParagraphElement> {
  
    size?: HelperTextSize;
  
    children?: ReactNode;
  }