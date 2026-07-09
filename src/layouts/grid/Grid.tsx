import clsx from "clsx";

import "./grid.css";

import type {
  GridProps,
} from "./grid.types";


/* ======================================
   GRID
====================================== */

export function Grid({
  children,
  as: Component = "div",
  gap = "lg",
  columns,
  template,
  className,
  ...props
}: GridProps) {

  const classes = clsx(
    "grid",

    `grid--gap-${gap}`,

    columns &&
      `grid--cols-${columns}`,

    template &&
      `grid--template-${template}`,

    className,
  );

  return (

    <Component
      className={classes}
      {...props}
    >

      {children}

    </Component>

  );

}