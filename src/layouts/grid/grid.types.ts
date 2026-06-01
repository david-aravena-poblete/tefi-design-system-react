import type {
    HTMLAttributes,
    ReactNode,
  } from "react";
  
  
  /* ======================================
     GRID
  ====================================== */
  
  export type GridGap =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xxl"
    | "xxxl";
  
  
  export type GridColumns =
    | 1
    | 2
    | 3
    | 4
    | 6
    | 12;
  
  
  /* ======================================
     PROPS
  ====================================== */
  
  export interface GridProps
    extends HTMLAttributes<HTMLDivElement> {
  
    children?: ReactNode;
  
    gap?: GridGap;
  
    columns?: GridColumns;
  }