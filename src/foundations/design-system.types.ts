/* ======================================
    SCALE
 ====================================== */

export const SIZES = ["sm", "md", "lg"] as const;

export type Size = (typeof SIZES)[number];

export const SPACINGS = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xxxl"] as const;

export type Spacing = (typeof SPACINGS)[number];

/* ======================================
    TYPOGRAPHY
 ====================================== */

export const FONT_SIZES = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"] as const;

export type FontSize = (typeof FONT_SIZES)[number];

/* ======================================
    LAYOUT
 ====================================== */

export const ALIGNS = ["start", "center", "end", "stretch", "baseline"] as const;

export type Align = (typeof ALIGNS)[number];

export const JUSTIFIES = ["start", "center", "end", "between", "around"] as const;

export type Justify = (typeof JUSTIFIES)[number];

/* ======================================
    FORM
 ====================================== */

export const STATES = ["default", "error", "success", "warning"] as const;

export type State = (typeof STATES)[number];

/* ======================================
    THEMING
 ====================================== */

export const THEMES = ["light", "dark"] as const;

export type Theme = (typeof THEMES)[number];

export const BRANDS = ["default", "daravena"] as const;

export type Brand = (typeof BRANDS)[number];

/* ======================================
    MEDIA
 ====================================== */

export const ASPECTS = ["1:1", "4:3", "16:9"] as const;

export type Aspect = (typeof ASPECTS)[number];

/* ======================================
    SHAPE
 ====================================== */

export const SHAPES = ["circle", "rounded", "square"] as const;

export type Shape = (typeof SHAPES)[number];
