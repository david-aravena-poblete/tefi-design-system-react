/* ======================================
   IMPORTS
====================================== */

import type { ComponentPropsWithoutRef } from "react";

import type { HtmlElement } from "@/laboratory/types";

import type { HtmlProps } from "@/laboratory/capabilities/html";

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

export type BoxProps<T extends BoxHtml = "div"> = LayoutProps &
  SurfaceProps &
  HtmlProps<T> &
  Omit<ComponentPropsWithoutRef<T>, "children" | "as">;