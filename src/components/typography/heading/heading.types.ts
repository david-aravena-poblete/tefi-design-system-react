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
   SIZE
====================================== */

export type HeadingSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

/* ======================================
   PROPS
====================================== */

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {

  children?: ReactNode;

  level?: HeadingLevel;

  size?: HeadingSize;

  skeleton?: boolean;

}