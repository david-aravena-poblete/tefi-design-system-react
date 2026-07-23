/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./container.css";

import type { ContainerProps } from "./container.types";

/* ======================================
   CONTAINER
====================================== */

export function Container({
  /* ======================================
     TEFI PROPS
  ====================================== */

  as: Component = "div",

  size = "md",

  /* ======================================
     REACT PROPS
  ====================================== */

  className,

  children,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: ContainerProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "container",

    `container--${size}`,

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