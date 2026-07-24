import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import type {
  Align,
  Direction,
  HtmlElement,
  Justify,
  Radius,
  Spacing,
  Surface,
  Text,
  Border,
  Width,
} from "../tokens";

export interface BoxProps
  extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  children?: ReactNode;

  html?: HtmlElement;

  direction?: Direction;
  align?: Align;
  justify?: Justify;

  inside?: Spacing;
  outside?: Spacing;
  between?: Spacing;

  radius?: Radius;
  surface?: Surface;
  text?: Text;
  border?: Border;
  maxWidth?: Width;
}