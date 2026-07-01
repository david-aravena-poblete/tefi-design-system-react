import type {
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

/* ======================================
   CONTAINER
====================================== */

export type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

export type ContainerPadding =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl";

/* ======================================
   PROPS
====================================== */

export interface ContainerProps
  extends HTMLAttributes<HTMLElement> {

  children?: ReactNode;

  as?: ElementType;

  size?: ContainerSize;

  paddingTop?: ContainerPadding;

  paddingBottom?: ContainerPadding;
}