import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import type { InteractionProps } from "../interaction/interaction.types";
import type {
  Align,
  Border,
  Color,
  Dimension,
  Direction,
  FontSize,
  FontWeight,
  HtmlElement,
  Justify,
  Radius,
  Spacing,
  Surface,
  Width,
} from "../tokens";

export type BoxProps<T extends HtmlElement = "div"> = {
  children?: ReactNode;

  html?: T;

  direction?: Direction;
  align?: Align;
  justify?: Justify;

  inside?: Spacing;
  insideX?: Spacing;
  insideY?: Spacing;
  outside?: Spacing;
  between?: Spacing;

  radius?: Radius;
  surface?: Surface;
  background?: Color;
  text?: Color;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  border?: Border;
  maxWidth?: Width;
  minHeight?: Dimension;
} & InteractionProps &
  Omit<ComponentPropsWithoutRef<T>, "children">;