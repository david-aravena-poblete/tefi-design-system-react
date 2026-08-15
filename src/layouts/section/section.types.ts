/* ======================================
   IMPORTS
====================================== */

import type { ComponentPropsWithoutRef } from "react";

import type { HtmlElement } from "@/laboratory/types";

import type { HtmlProps } from "@/laboratory/capabilities/html";

/* ======================================
    TYPES
 ====================================== */

export type SectionHtml = Extract<
  HtmlElement,
  "section" | "div" | "article" | "main" | "aside" | "nav"
>;

/* ======================================
    SECTION SIZE
 ====================================== */

export type SectionSize = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

/* ======================================
    SECTION PROPS
 ====================================== */

export type SectionProps<T extends SectionHtml = "section"> = {
  size?: SectionSize;
} & HtmlProps<T> &
  Omit<ComponentPropsWithoutRef<T>, "children" | "as">;
