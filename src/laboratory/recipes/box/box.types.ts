/* ======================================
   IMPORTS
====================================== */

import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";

/* ======================================
   BOX PROPS
====================================== */

export interface BoxProps {
  layout?: LayoutProps;

  surface?: SurfaceProps;
}