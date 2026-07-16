/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentProps,
  ElementType,
} from "react";

import type {
  Shape,
} from "../../foundations/design-system.types";

import type {
  ImageSourceProps,
} from "../image";

import type {
  PolymorphicProps,
} from "../../shared/polymorphic";

/* ======================================
   TYPES
====================================== */

export type AvatarSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

/* ======================================
   OWN PROPS
====================================== */

export interface AvatarOwnProps
  extends Omit<
    ImageSourceProps,
    | "className"
    | "style"
    | "children"
  > {

  size?: AvatarSize;

  shape?: Shape;

  fallback?: ComponentProps<"span">["children"];

}

/* ======================================
   PROPS
====================================== */

export type AvatarProps<
  T extends ElementType = "span",
> = PolymorphicProps<
  T,
  AvatarOwnProps
>;