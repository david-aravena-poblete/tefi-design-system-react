/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./inline.css";

import type { InlineProps } from "./inline.types";

/* ======================================
   INLINE
====================================== */

export function Inline({
  /* ======================================
     TEFI PROPS
  ====================================== */

  as: Component = "div",

  gap = "md",

  /* ======================================
     REACT PROPS
  ====================================== */

  className,

  children,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: InlineProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "inline",

    `inline--gap-${gap}`,

    className,
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}