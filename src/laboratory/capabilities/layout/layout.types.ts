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
  Size,
  Space,
  Width,
} from "@/laboratory/types";

/* ======================================
    LAYOUT PROPS
 ====================================== */

export interface LayoutProps {
  display?: Display;

  direction?: Direction;

  align?: Align;

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

  minHeight?: Size;

  maxHeight?: Size;

  aspect?: Aspect;

  fill?: boolean;
}
