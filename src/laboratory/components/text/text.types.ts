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

import type { HtmlElement } from "@/laboratory/types";

/* ======================================
   TEXT PROPS
====================================== */

export type TextProps<
  T extends HtmlElement = "span",
> = {
  children?: ReactNode;

  typography?: TypographyProps;

  surface?: SurfaceProps;
} & HtmlProps &
  Omit<
    ComponentPropsWithoutRef<T>,
    "children" | "as"
  >;