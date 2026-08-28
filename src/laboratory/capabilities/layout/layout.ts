/* ======================================
   IMPORTS
====================================== */

import { compose } from "@/laboratory/core/compose";

import type { LayoutProps } from "./layout.types";

/* ======================================
   CAPABILITIES
====================================== */

export const layoutCapabilities = [
  "display",
  "direction",
  "align",
  "alignSelf",
  "justify",
  "between",
  "inside",
  "insideX",
  "insideY",
  "outside",
  "outsideX",
  "outsideY",

  "width",
  "minWidth",
  "maxWidth",

  "height",
  "minHeight",
  "maxHeight",

  "aspect",

  "fill",

  "position",
  "inset",
  "top",
  "right",
  "bottom",
  "left",
] as const;

/* ======================================
   LAYOUT
====================================== */

export function layout(props: LayoutProps) {
  return compose("layout", layoutCapabilities, props);
}