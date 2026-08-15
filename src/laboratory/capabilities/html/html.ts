/* ======================================
   IMPORTS
====================================== */

import type { HtmlElement } from "@/laboratory/types";

import type { HtmlProps } from "./html.types";

/* ======================================
   HTML
====================================== */

export function html<T extends HtmlElement>({
  as,
}: HtmlProps<T>): T {
  return as as T;
}