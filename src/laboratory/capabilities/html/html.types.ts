/* ======================================
   IMPORTS
====================================== */

import type { ComponentPropsWithoutRef } from "react";

import type { HtmlElement } from "@/laboratory/types";

/* ======================================
   EXPORTS
====================================== */

export type { HtmlElement };

/* ======================================
   HTML PROPS
====================================== */

export type HtmlProps<T extends HtmlElement = HtmlElement> = ComponentPropsWithoutRef<T> & {
  as?: T;
};
