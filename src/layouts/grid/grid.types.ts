import type {
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";


/* ======================================
   GRID
====================================== */

export type GridGap =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl";


export type GridColumns =
  | 1
  | 2
  | 3
  | 4
  | 6
  | 12;


export type GridTemplate =
  | "auto-1fr-auto";


/* ======================================
   PROPS
====================================== */

export interface GridProps
  extends HTMLAttributes<HTMLElement> {

  children?: ReactNode;

  as?: ElementType;

  gap?: GridGap;

  columns?: GridColumns;

  template?: GridTemplate;

}