/* ======================================
   IMPORTS
====================================== */

import type { HtmlProps } from "@/laboratory/capabilities/html";
import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";

/* ======================================
   SKELETON PROPS
====================================== */

export interface SkeletonProps extends HtmlProps<"div">, LayoutProps, SurfaceProps {}
