import type {
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";


/* ======================================
   STACK
====================================== */

export type StackGap =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl";


export type StackAlign =
  | "start"
  | "center"
  | "end"
  | "stretch";


export type StackJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around";


export interface StackProps
  extends HTMLAttributes<HTMLElement> {

  children?: ReactNode;

  as?: ElementType;

  gap?: StackGap;

  align?: StackAlign;

  justify?: StackJustify;
}