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
   "blue",
   "blue-light",
   "blue-transparent",
   "white",
 ] as const;
 
 export type Color = (typeof COLORS)[number];

 /* ======================================
   FONT SIZE
====================================== */

  export const FONT_SIZES = [
   "xs",
   "sm",
   "md",
   "lg",
   "xl",
   "2xl",
   "3xl",
   "4xl",
   "5xl",
 ] as const;
 
 export type FontSize =
   (typeof FONT_SIZES)[number];

/* ======================================
   FONT WEIGHT
====================================== */

export const FONT_WEIGHTS = [
   "regular",
   "medium",
   "semibold",
   "bold",
 ] as const;
 
 export type FontWeight =
   (typeof FONT_WEIGHTS)[number];

/* ======================================
   DIMENSION
====================================== */

export const DIMENSIONS = [
   "32",
   "40",
   "48",
 ] as const;
 
 export type Dimension =
   (typeof DIMENSIONS)[number];
