import type {
    ElementType,
    HTMLAttributes,
    ReactNode,
  } from "react";
  
  
  /* ======================================
     SECTION
  ====================================== */
  
  export type SectionSize =
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xxl";
  
  
  /* ======================================
     PROPS
  ====================================== */
  
  export interface SectionProps
    extends HTMLAttributes<HTMLElement> {
  
    children?: ReactNode;
  
    as?: ElementType;
  
    size?: SectionSize;
  }