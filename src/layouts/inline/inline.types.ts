import type {
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

export type InlineGap =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl";

export type InlineAlign =
  | "start"
  | "center"
  | "end"
  | "stretch"
  | "baseline";

export type InlineJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around";

export interface InlineProps
  extends HTMLAttributes<HTMLElement> {

  as?: ElementType;

  children?: ReactNode;

  gap?: InlineGap;

  align?: InlineAlign;

  justify?: InlineJustify;

  wrap?: boolean;

}