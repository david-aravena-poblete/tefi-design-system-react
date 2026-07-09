import "./inline.css";

import type {
  InlineProps,
} from "./inline.types";

/* ======================================
   INLINE
====================================== */

export function Inline({
  as: Component = "div",
  children,
  gap = "md",
  align = "center",
  justify = "start",
  wrap = false,
  className = "",
  ...props
}: InlineProps) {

  const classes = [
    "inline",

    `inline--gap-${gap}`,

    `inline--align-${align}`,

    `inline--justify-${justify}`,

    wrap && "inline--wrap",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (

    <Component
      className={classes}
      {...props}
    >

      {children}

    </Component>

  );

}