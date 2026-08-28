/* ======================================
   IMPORTS
====================================== */

import type {
  Align,
  Aspect,
  Direction,
  Display,
  Justify,
  Margin,
  Position,
  Size,
  Space,
  Width,
} from "@/laboratory/types";

/* ======================================
   LAYOUT LENGTH
====================================== */

export type LayoutLength =
  | Size
  | `${number}lh`;

/* ======================================
   LAYOUT PROPS
====================================== */

export interface LayoutProps {
  display?: Display;

  direction?: Direction;

  align?: Align;

  alignSelf?: Align;

  justify?: Justify;

  between?: Space;

  inside?: Space;

  insideX?: Space;

  insideY?: Space;

  outside?: Margin;

  outsideX?: Margin;

  outsideY?: Margin;

  width?: Size;

  minWidth?: Size;

  maxWidth?: Width;

  height?: Size;

  minHeight?: LayoutLength;

  maxHeight?: Size;

  aspect?: Aspect;

  fill?: boolean;

  position?: Position;

  inset?: Space;

  top?: Space;

  right?: Space;

  bottom?: Space;

  left?: Space;
}