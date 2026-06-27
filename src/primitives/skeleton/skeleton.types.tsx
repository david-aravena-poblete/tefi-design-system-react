/* ======================================
   IMPORTS
====================================== */

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/* ======================================
   SKELETON RATIO
====================================== */

export type SkeletonRatio =
  | "1:1"
  | "4:3"
  | "16:9";

/* ======================================
   SKELETON PROPS
====================================== */

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement> {

  children?: ReactNode;

  fill?: boolean;

  width?: string;

  height?: string;

  radius?: string;

  animated?: boolean;

  ratio?: SkeletonRatio;
}