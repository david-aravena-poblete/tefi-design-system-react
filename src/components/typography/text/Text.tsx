/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./text.css";

import { Skeleton } from "@/primitives";

import { ExpandableText } from "./ExpandableText";

import type { TextProps } from "./text.types";

/* ======================================
   TEXT
====================================== */

export function Text({
  /* ======================================
     TEFI PROPS
  ====================================== */

  size = "md",

  variant = "default",

  skeleton = false,

  expandable = false,

  lines = 4,

  expandLabel = "Ver más",

  collapseLabel = "Ver menos",

  /* ======================================
     REACT PROPS
  ====================================== */

  className = "",

  children,

  ref,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: TextProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "text",

    `text--${size}`,

    `text--${variant}`,

    className,
  );

  /* ======================================
     CONTENT
  ====================================== */

  const content = (
    <p ref={ref} className={classes} {...rest}>
      {children}
    </p>
  );

  /* ======================================
     EXPANDABLE
  ====================================== */

  if (expandable) {
    return (
      <ExpandableText
        skeleton={skeleton}
        size={size}
        variant={variant}
        lines={lines}
        expandLabel={expandLabel}
        collapseLabel={collapseLabel}
        className={className}
        {...rest}
      >
        {children}
      </ExpandableText>
    );
  }

  /* ======================================
     SKELETON
  ====================================== */

  if (skeleton) {
    return <Skeleton>{content}</Skeleton>;
  }

  /* ======================================
     RENDER
  ====================================== */

  return content;
}
