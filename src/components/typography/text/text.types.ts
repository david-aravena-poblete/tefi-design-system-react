/* ======================================
   IMPORTS
====================================== */

import type {
    HTMLAttributes,
    ReactNode,
  } from "react";
  
  /* ======================================
     TEXT
  ====================================== */
  
  export type TextSize =
    | "sm"
    | "md";
  
  export type TextVariant =
    | "default"
    | "secondary"
    | "muted"
    | "inverse";
  
  /* ======================================
     PROPS
  ====================================== */
  
  export interface TextProps
    extends HTMLAttributes<HTMLElement> {
  
    children?: ReactNode;
  
    as?:
      | "p"
      | "span"
      | "label"
      | "div";
  
    size?: TextSize;
  
    variant?: TextVariant;
  }