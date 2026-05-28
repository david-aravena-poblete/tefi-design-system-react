import type {
    HTMLAttributes,
    ReactNode,
  } from "react";
  
  /* ======================================
     ERROR MESSAGE SIZE
  ====================================== */
  
  export type ErrorMessageSize =
    | "sm"
    | "md"
    | "lg";
  
  /* ======================================
     ERROR MESSAGE PROPS
  ====================================== */
  
  export interface ErrorMessageProps
    extends HTMLAttributes<HTMLParagraphElement> {
  
    size?: ErrorMessageSize;
  
    children?: ReactNode;
  }