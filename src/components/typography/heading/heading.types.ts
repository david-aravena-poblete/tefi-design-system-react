/* ======================================
   IMPORTS
====================================== */

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/* ======================================
   HEADING
====================================== */

export type HeadingLevel =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6;

/* ======================================
   PROPS
====================================== */

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {

  children?: ReactNode;

  level?: HeadingLevel;

  skeleton?: boolean;
}