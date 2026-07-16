/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./inline.css";

import type {
  InlineProps,
} from "./inline.types";

/* ======================================
   INLINE
====================================== */

export function Inline({

  /* ======================================
     TEFI PROPS
  ====================================== */

  as: Component = "div",

  gap = "md",

  align = "center",

  justify = "start",

  wrap = false,

  /* ======================================
     REACT PROPS
  ====================================== */

  className = "",

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

    `inline--align-${align}`,

    `inline--justify-${justify}`,

    {
      "inline--wrap": wrap,
    },

    className,

  );

  /* ======================================
     RENDER
  ====================================== */

  return (

    <Component
      className={classes}
      {...rest}
    >

      {children}

    </Component>

  );

}