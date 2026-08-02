/* ======================================
   IMPORTS
====================================== */

import type { ComponentPropsWithoutRef } from "react";

import type {
  Color,
  FontSize,
  FontWeight,
  TextAlign,
} from "@/laboratory/tokens";

/* ======================================
   TYPES
====================================== */

export type TextElement =
  | "span"
  | "p"
  | "label"
  | "strong"
  | "em"
  | "small"
  | "mark"
  | "abbr"
  | "cite"
  | "code";

export type TextSize = FontSize;

export type TextWeight = FontWeight;

/* ======================================
   TEXT PROPS
====================================== */

export interface TextProps
  extends Omit<ComponentPropsWithoutRef<TextElement>, "as" | "color"> {
  as?: TextElement;

  size?: TextSize;
  weight?: TextWeight;
  color?: Color;
  align?: TextAlign;

  truncate?: boolean;
}