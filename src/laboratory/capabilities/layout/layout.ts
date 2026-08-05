/* ======================================
   IMPORTS
====================================== */

import { compose } from "@/laboratory/core/compose";

import type { LayoutProps } from "./layout.types";

/* ======================================
   CAPABILITIES
====================================== */

const layoutCapabilities = [
  "display",
  "direction",
  "align",
  "justify",
  "between",
  "inside",
  "insideX",
  "insideY",
  "outside",

  "width",
  "minWidth",
  "maxWidth",

  "height",
  "minHeight",
  "maxHeight",
] as const;

/* ======================================
   LAYOUT
====================================== */

export function layout(props: LayoutProps) {
  return compose(
    "layout",
    layoutCapabilities,
    props,
  );
}