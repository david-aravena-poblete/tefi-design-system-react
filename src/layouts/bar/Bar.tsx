import "./bar.css";

import clsx from "clsx";

import type { BarProps } from "./bar.types";

export function Bar({
  children,

  direction = "horizontal",
  justify = "between",
  align = "center",
  gap = "md",

  className,
  ...restProps
}: BarProps) {

  /* ======================================
      CLASSES
  ====================================== */

  const classes = clsx(
    "bar",
    `bar--${direction}`,
    `bar--justify-${justify}`,
    `bar--align-${align}`,
    `bar--gap-${gap}`,
    className,
  );

  /* ======================================
      CONTENT
  ====================================== */

  const content = children;

  /* ======================================
      RENDER
  ====================================== */

  return (
    <div
      className={classes}
      {...restProps}
    >
      {content}
    </div>
  );
}