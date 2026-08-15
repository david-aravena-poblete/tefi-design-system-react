/* ======================================
   IMPORTS
====================================== */

import type { ComponentPropsWithoutRef } from "react";

import type { HtmlElement } from "@/laboratory/types";

import type { HtmlProps } from "@/laboratory/capabilities/html";

/* ======================================
    TYPES
 ====================================== */

export type ContainerHtml = Extract<
  HtmlElement,
  "div" | "section" | "article" | "main" | "aside" | "nav"
>;

/* ======================================
    CONTAINER SIZE
 ====================================== */

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

/* ======================================
    CONTAINER PROPS
 ====================================== */

export type ContainerProps<T extends ContainerHtml = "div"> = {
  size?: ContainerSize;
} & HtmlProps<T> &
  Omit<ComponentPropsWithoutRef<T>, "children" | "as">;
