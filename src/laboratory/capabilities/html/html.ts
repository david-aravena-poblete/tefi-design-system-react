/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import type { HtmlProps } from "./html.types";

/* ======================================
   HTML
====================================== */

export function html({
  as = "span",
}: HtmlProps): ElementType {
  return as;
}