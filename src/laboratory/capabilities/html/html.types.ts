/* ======================================
   IMPORTS
====================================== */

import type { HtmlElement } from "@/laboratory/types";

/* ======================================
   EXPORTS
====================================== */

export type { HtmlElement };

/* ======================================
   HTML PROPS
====================================== */

export interface HtmlProps<
  T extends HtmlElement = HtmlElement,
> {
  as?: T;
}