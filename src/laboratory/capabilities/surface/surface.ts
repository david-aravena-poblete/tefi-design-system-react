/* ======================================
   IMPORTS
====================================== */

import { compose } from "@/laboratory/core/compose";

import type { SurfaceProps } from "./surface.types";

/* ======================================
   CAPABILITIES
====================================== */

export const surfaceCapabilities = [
  "background",
  "text",
  "border",
  "borderWidth",
  "borderStyle",
  "radius",
  "shadow",
] as const;

/* ======================================
   SURFACE
====================================== */

export function surface(props: SurfaceProps) {
  return compose("surface", surfaceCapabilities, props);
}
