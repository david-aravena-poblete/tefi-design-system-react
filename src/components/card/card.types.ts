import type {
    HTMLAttributes,
    ReactNode,
  } from "react";
  
  /* ======================================
     CARD
  ====================================== */
  
  export type CardVariant =
    | "outlined"
    | "elevated"
    | "flat";
  
  export type CardSize =
    | "sm"
    | "md"
    | "lg";
  
  /* ======================================
     PROPS
  ====================================== */
  
  export interface CardProps
    extends HTMLAttributes<HTMLDivElement> {
  
    children?: ReactNode;
  
    variant?: CardVariant;
  
    size?: CardSize;
  }
  
  export interface CardSectionProps
    extends HTMLAttributes<HTMLDivElement> {
  
    children?: ReactNode;
  }