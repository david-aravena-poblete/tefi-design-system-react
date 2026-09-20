/* ======================================
   THEME
====================================== */

export const THEMES = ["light", "dark"] as const;

export type Theme = (typeof THEMES)[number];


/* ======================================
   BRAND
====================================== */

export const BRANDS = [
  "default",
  "tefi",
  "daravena",
] as const;

export type Brand = (typeof BRANDS)[number];


/* ======================================
   DEFAULTS
====================================== */

export const DEFAULT_THEME: Theme = "light";

export const DEFAULT_BRAND: Brand = "default";