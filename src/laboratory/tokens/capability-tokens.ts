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
  ] as const;
  
  export type HtmlElement = (typeof HTML_ELEMENTS)[number];
  
  /* ======================================
     LAYOUT
  ====================================== */
  
  export const DIRECTIONS = [
    "row",
    "column",
  ] as const;
  
  export type Direction = (typeof DIRECTIONS)[number];
  
  export const ALIGNS = [
    "start",
    "center",
    "end",
    "stretch",
  ] as const;
  
  export type Align = (typeof ALIGNS)[number];
  
  export const JUSTIFIES = [
    "start",
    "center",
    "end",
    "between",
  ] as const;
  
  export type Justify = (typeof JUSTIFIES)[number];