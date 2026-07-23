/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./stack.css";

import type { StackProps } from "./stack.types";

/* ======================================
   STACK
====================================== */

export function Stack({
  /* ======================================
     TEFI PROPS
  ====================================== */

  as: Component = "div",

  gap = "md",

  align,

  justify,

  /* ======================================
     REACT PROPS
  ====================================== */

  className,

  children,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: StackProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "stack",

    `stack--gap-${gap}`,

    align && `stack--align-${align}`,

    justify && `stack--justify-${justify}`,

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