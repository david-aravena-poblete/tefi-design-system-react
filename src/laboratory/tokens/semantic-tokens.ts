/* ======================================
   SURFACE
====================================== */

export const SURFACES = [
    "default",
    "elevated",
    "inverse",
  ] as const;
  
  export type Surface = (typeof SURFACES)[number];
  
  /* ======================================
     TEXT
  ====================================== */
  
  export const TEXTS = [
    "primary",
    "secondary",
    "inverse",
  ] as const;
  
  export type Text = (typeof TEXTS)[number];

  /* ======================================
   BORDER
====================================== */

export const BORDERS = [
   "none",
   "primary",
   "secondary",
 ] as const;
 
 export type Border = (typeof BORDERS)[number];