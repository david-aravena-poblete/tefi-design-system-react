/* ======================================
   HTML
====================================== */

export const HTML_ELEMENTS = [
  "div",
  "section",
  "article",
  "header",
  "footer",
  "main",
  "nav",
  "aside",
  "span",
  "button",
  "p",
  "label",
  "strong",
  "em",
  "small",
  "mark",
  "abbr",
  "cite",
  "code",
] as const;

export type HtmlElement = (typeof HTML_ELEMENTS)[number];

/* ======================================
   LAYOUT
====================================== */

export const DISPLAYS = ["flex", "inline-flex"] as const;

export type Display = (typeof DISPLAYS)[number];

export const DIRECTIONS = ["row", "column"] as const;

export type Direction = (typeof DIRECTIONS)[number];

export const ALIGNS = ["start", "center", "end", "stretch"] as const;

export type Align = (typeof ALIGNS)[number];

export const JUSTIFIES = ["start", "center", "end", "between"] as const;

export type Justify = (typeof JUSTIFIES)[number];

/* ======================================
   TEXT
====================================== */

export const TEXT_ALIGNS = ["start", "center", "end", "justify"] as const;

export type TextAlign = (typeof TEXT_ALIGNS)[number];

/* ======================================
   INTERACTION
====================================== */

export const HOVERS = ["default", "elevated", "inverse"] as const;

export type Hover = (typeof HOVERS)[number];

export const PRESSEDS = ["default", "elevated", "inverse"] as const;

export type Pressed = (typeof PRESSEDS)[number];
