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

export type GridHtml = Extract<HtmlElement, "div" | "section" | "article" | "main" | "aside">;

/* ======================================
    GRID COLUMNS
 ====================================== */

export type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;

/* ======================================
    GRID PROPS
 ====================================== */

export type GridProps<T extends GridHtml = "div"> = {
  gap?: Space;

  columns?: GridColumns;
} & HtmlProps<T> &
  Omit<ComponentPropsWithoutRef<T>, "children" | "as">;
