import "./inline.css";

import type { InlineProps } from "./inline.types";


/* ======================================
   INLINE
====================================== */

export function Inline({
  children,
  gap = "md",
  align = "center",
  justify = "start",
  className = "",
  ...props
}: InlineProps) {

  const classes = [
    "inline",

    `inline--gap-${gap}`,

    `inline--align-${align}`,

    `inline--justify-${justify}`,

    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
}