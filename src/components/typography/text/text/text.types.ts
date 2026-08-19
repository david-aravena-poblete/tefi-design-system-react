/* ======================================
   IMPORTS
====================================== */

import type { ComponentPropsWithoutRef, ReactNode } from "react";

import type {
  FontWeight,
  TextAlign,
  TextDecoration,
  TextTransform,
  TypographyLineHeight,
  TypographySize,
} from "@/laboratory/types";

import type { HtmlElement } from "@/laboratory/types";

import type { HtmlProps } from "@/laboratory/capabilities/html";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";

/* ======================================
   TYPES
====================================== */

export type TextHtml = Extract<
  HtmlElement,
  "span" | "p" | "strong" | "small" | "label" | "em" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;

/* ======================================
   TEXT PROPS
====================================== */

export type TextProps<T extends TextHtml = "p"> = {
  children?: ReactNode;

  size?: TypographySize;

  color?: SurfaceProps["text"];

  weight?: FontWeight;

  lineHeight?: TypographyLineHeight;

  align?: TextAlign;

  case?: TextTransform;

  decoration?: TextDecoration;

  noWrap?: boolean;

  truncate?: boolean;

  skeleton?: boolean;

  expandable?: boolean;

  lines?: number;

  expandLabel?: string;

  collapseLabel?: string;
} & HtmlProps<T> &
  Omit<ComponentPropsWithoutRef<T>, "children" | "as">;
