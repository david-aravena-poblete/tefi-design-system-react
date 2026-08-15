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

export type StackHtml = Extract<
  HtmlElement,
  "div" | "section" | "article" | "main" | "aside" | "nav"
>;

/* ======================================
   STACK PROPS
====================================== */

export type StackProps<T extends StackHtml = "div"> = {
  gap?: Space;
} & HtmlProps<T> &
  Omit<ComponentPropsWithoutRef<T>, "children" | "as">;
