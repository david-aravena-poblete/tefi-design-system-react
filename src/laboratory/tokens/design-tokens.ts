/* ======================================
   SPACING
====================================== */

export const SPACINGS = [
    "none",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
  ] as const;
  
  export type Spacing = (typeof SPACINGS)[number];
  
  /* ======================================
     RADIUS
  ====================================== */
  
  export const RADII = [
    "none",
    "sm",
    "md",
    "lg",
    "full",
  ] as const;
  
  export type Radius = (typeof RADII)[number];
  
  /* ======================================
     SIZE
  ====================================== */
  
  export const SIZES = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
  ] as const;
  
  export type Size = (typeof SIZES)[number];
  
/* ======================================
   WIDTH
====================================== */

export const WIDTHS = [
   "xs",
   "sm",
   "md",
   "lg",
   "xl",
   "2xl",
 ] as const;
 
 export type Width = (typeof WIDTHS)[number];
  
  /* ======================================
     COLOR
  ====================================== */
  
  export const COLORS = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "neutral",
    "white",
    "black",
  ] as const;
  
  export type Color = (typeof COLORS)[number];

