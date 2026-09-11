/* ======================================
   BACKGROUND
====================================== */

export type Background =
  | "white"
  | "blue"
  | "blue-soft"
  | "gray"
  | "gray-soft"
  | "red"
  | "red-strong"
  | "soft"
  | "transparent"
  | "overlay";

/* ======================================
   TEXT
====================================== */

export type TextColor =
  | "white"
  | "black"
  | "blue"
  | "blue-soft"
  | "gray"
  | "red"
  | "red-strong";

export type TextSemantic =
  | "primary"
  | "secondary"
  | "muted"
  | "inverse";

export type Text = TextColor | TextSemantic;

/* ======================================
   BORDER
====================================== */

export type Border =
  | "blue"
  | "gray"
  | "gray-soft"
  | "red";

/* ======================================
   BORDER WIDTH
====================================== */

export type BorderWidth =
  | "none"
  | "1"
  | "2";

/* ======================================
   BORDER STYLE
====================================== */

export type BorderStyle =
  | "solid"
  | "dashed";

/* ======================================
   RADIUS
====================================== */

export type Radius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "full";

/* ======================================
   SHADOW
====================================== */

export type Shadow =
  | "none"
  | "xs"
  | "sm"
  | "md";