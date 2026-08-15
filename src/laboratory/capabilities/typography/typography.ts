/* ======================================
   IMPORTS
====================================== */

import { compose } from "@/laboratory/core/compose";

import type { TypographyProps } from "./typography.types";

/* ======================================
   CAPABILITIES
====================================== */

export const typographyCapabilities = [
  "variant",
  "weight",
  "align",
  "transform",
  "decoration",
  "wrap",
  "truncate",
] as const;

/* ======================================
   TYPOGRAPHY
====================================== */

export function typography(props: TypographyProps) {
  return compose("typography", typographyCapabilities, props);
}
