/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import type { HtmlProps } from "@/laboratory/capabilities/html";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { TypographyProps } from "@/laboratory/capabilities/typography";

/* ======================================
   TYPES
====================================== */

export type TextHtml =
  | "span"
  | "p"
  | "strong"
  | "small"
  | "label";

/* ======================================
   TEXT PROPS
====================================== */

export type TextProps<
  T extends TextHtml = "span",
> = {
  children?: ReactNode;

  typography?: TypographyProps;

  surface?: SurfaceProps;
} & HtmlProps<T> &
  Omit<
    ComponentPropsWithoutRef<T>,
    "children" | "as"
  >;