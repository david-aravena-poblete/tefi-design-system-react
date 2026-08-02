/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import type { InteractionProps } from "../interaction/interaction.types";

import type {
  Align,
  Color,
  Dimension,
  Direction,
  Display,
  HtmlElement,
  Justify,
  Radius,
  Spacing,
  Width,
} from "../tokens";

/* ======================================
   TYPES
====================================== */

export type BoxProps<T extends HtmlElement = "div"> = {
  children?: ReactNode;

  as?: T;

  display?: Display;
  direction?: Direction;
  align?: Align;
  justify?: Justify;

  inside?: Spacing;
  insideX?: Spacing;
  insideY?: Spacing;
  outside?: Spacing;
  between?: Spacing;

  radius?: Radius;
  background?: Color;
  color?: Color;
  border?: Color;
  maxWidth?: Width;
  minHeight?: Dimension;
} & InteractionProps &
  Omit<ComponentPropsWithoutRef<T>, "children" | "as">