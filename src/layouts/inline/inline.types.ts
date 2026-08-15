/* ======================================
   IMPORTS
====================================== */

import type { ComponentPropsWithoutRef } from "react";

import type { HtmlElement } from "@/laboratory/types";

import type { HtmlProps } from "@/laboratory/capabilities/html";

import type { Space } from "@/laboratory/types";

/* ======================================
    TYPES
 ====================================== */

export type InlineHtml = Extract<
  HtmlElement,
  "div" | "section" | "article" | "main" | "aside" | "nav"
>;

/* ======================================
    INLINE PROPS
 ====================================== */

export type InlineProps<T extends InlineHtml = "div"> = {
  gap?: Space;
} & HtmlProps<T> &
  Omit<ComponentPropsWithoutRef<T>, "children" | "as">;
