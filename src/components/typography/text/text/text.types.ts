/* ======================================
   IMPORTS
====================================== */

import type { ComponentPropsWithoutRef, ReactNode } from "react";

import type { FontWeight, TextAlign, TextDecoration, TextTransform } from "@/laboratory/types";

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
   TEXT SIZE
====================================== */

export type TextSize = "sm" | "md" | "lg" | "caption";

/* ======================================
   TEXT PROPS
====================================== */

export type TextProps<T extends TextHtml = "span"> = {
  children?: ReactNode;

  size?: TextSize;

  color?: SurfaceProps["text"];

  weight?: FontWeight;

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
