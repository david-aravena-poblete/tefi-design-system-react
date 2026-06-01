import clsx from "clsx";

import "./grid.css";

import type { GridProps } from "./grid.types";


/* ======================================
   GRID
====================================== */

export function Grid({
  children,
  gap = "lg",
  columns,
  className,
  ...props
}: GridProps) {

  const classes = clsx(
    "grid",

    `grid--gap-${gap}`,

    columns && `grid--cols-${columns}`,

    className,
  );

  return (
    <div
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
}