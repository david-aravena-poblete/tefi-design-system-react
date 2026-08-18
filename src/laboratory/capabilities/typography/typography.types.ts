/* ======================================
   IMPORTS
====================================== */

import type {
  FontWeight,
  TextAlign,
  TextDecoration,
  TextTransform,
  TextWrap,
  TypographyLineHeight,
  TypographySize,
} from "@/laboratory/types";

/* ======================================
   TYPOGRAPHY PROPS
====================================== */

export interface TypographyProps {
  size?: TypographySize;

  weight?: FontWeight;

  lineHeight?: TypographyLineHeight;

  align?: TextAlign;

  transform?: TextTransform;

  decoration?: TextDecoration;

  wrap?: TextWrap;

  truncate?: boolean;
}