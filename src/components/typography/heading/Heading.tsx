/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./heading.css";

import { Skeleton } from "@/primitives";

import type { HeadingProps } from "./heading.types";

/* ======================================
   HEADING
====================================== */

export function Heading({
  /* ======================================
     TEFI PROPS
  ====================================== */

  as: Component = "h1",

  size = "2xl",

  skeleton = false,

  /* ======================================
     REACT PROPS
  ====================================== */

  className = "",

  children,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: HeadingProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx("heading", `heading--${size}`, className);

  /* ======================================
     CONTENT
  ====================================== */

  const heading = (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );

  /* ======================================
   CONDITIONAL RENDER
====================================== */

  if (skeleton) {
    return <Skeleton radius="var(--radius-md)">{heading}</Skeleton>;
  }

  /* ======================================
     RENDER
  ====================================== */

  return heading;
}
