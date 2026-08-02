/* ======================================
   IMPORTS
====================================== */

import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";
import { composer } from "@/laboratory/composer";

import type { BoxProps } from "./box.types";

/* ======================================
   BOX
====================================== */

export function createBox({
  layout: layoutProps,
  surface: surfaceProps,
}: BoxProps) {
  return composer(
    layoutProps && layout(layoutProps),
    surfaceProps && surface(surfaceProps),
  );
}