/* ======================================
   IMPORTS
====================================== */

import type {
  FontWeight,
  TextAlign,
  TextDecoration,
  TextTransform,
  TextWrap,
  TypographyVariant,
} from "@/laboratory/types";

/* ======================================
    TYPOGRAPHY PROPS
 ====================================== */

export interface TypographyProps {
  variant?: TypographyVariant;

  weight?: FontWeight;

  align?: TextAlign;

  transform?: TextTransform;

  decoration?: TextDecoration;

  wrap?: TextWrap;

  truncate?: boolean;
}
