import type {
    ReactNode,
    HTMLAttributes,
  } from "react";
  
  import type {
    ICON_SIZES,
  } from "./icon.constants";
  
  /* ======================================
     ICON TYPES
  ====================================== */
  
  export type IconSize =
    (typeof ICON_SIZES)[number];
  
  export interface IconProps
    extends HTMLAttributes<HTMLSpanElement> {
  
    name?: string;
  
    size?: IconSize;
  
    children?: ReactNode;
  
    ariaHidden?: boolean;
  }