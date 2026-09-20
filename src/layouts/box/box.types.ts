/* ======================================
   IMPORTS
====================================== */

import type { HtmlElement } from "@/laboratory/types";

import type { HtmlProps } from "@/laboratory/capabilities/html";

import type { FocusProps } from "@/laboratory/capabilities/focus";

import type { InteractionProps } from "@/laboratory/capabilities/interaction";

import type { LayoutProps } from "@/laboratory/capabilities/layout";

import type { SurfaceProps } from "@/laboratory/capabilities/surface";


/* ======================================
   TYPES
====================================== */

export type BoxHtml = Extract<
  HtmlElement,
  "div" | "section" | "article" | "main" | "aside" | "nav"
>;


/* ======================================
   BOX PROPS
====================================== */

export type BoxProps<T extends BoxHtml = "div"> =
  LayoutProps &
  FocusProps &
  SurfaceProps &
  InteractionProps &
  HtmlProps<T>;