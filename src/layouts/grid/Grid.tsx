/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./grid.css";

import type { GridProps } from "./grid.types";

/* ======================================
   GRID
====================================== */

export function Grid({
  /* ======================================
     TEFI PROPS
  ====================================== */

  as: Component = "div",

  gap = "lg",

  columns,

  /* ======================================
     REACT PROPS
  ====================================== */

  className,

  children,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: GridProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "grid",

    `grid--gap-${gap}`,

    columns && `grid--cols-${columns}`,

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
