/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./section.css";

import type {
  SectionProps,
} from "./section.types";

/* ======================================
   SECTION
====================================== */

export function Section({

  /* ======================================
     TEFI PROPS
  ====================================== */

  as: Component = "section",

  size = "md",

  /* ======================================
     REACT PROPS
  ====================================== */

  className,

  children,

  /* ======================================
     REST PROPS
  ====================================== */

  ...props

}: SectionProps) {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(

    "section",

    `section--${size}`,

    className,

  );

  /* ======================================
     RENDER
  ====================================== */

  return (

    <Component
      className={classes}
      {...props}
    >

      {children}

    </Component>

  );

}