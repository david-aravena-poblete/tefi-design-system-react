import type { ElementType,HTMLAttributes, ReactNode } from "react";
  
  
  /* ======================================
     CONTAINER
  ====================================== */
  
  export type ContainerSize =
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "full";
  
  
  /* ======================================
     PROPS
  ====================================== */
  
  export interface ContainerProps
    extends HTMLAttributes<HTMLElement> {
  
    children?: ReactNode;
  
    as?: ElementType;
  
    size?: ContainerSize;
  }