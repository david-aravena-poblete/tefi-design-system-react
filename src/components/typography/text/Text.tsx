/* ======================================
   IMPORTS
====================================== */

import type {
  ElementType,
} from "react";

import "./text.css";

import { Skeleton } from "@/primitives";

import { ExpandableText } from "./ExpandableText";

import type {
  TextProps,
} from "./text.types";

/* ======================================
   TEXT
====================================== */

export function Text({
  children,

  as = "p",

  size = "md",

  variant = "default",

  skeleton = false,

  expandable = false,

  lines = 4,

  expandLabel = "Ver más",

  collapseLabel = "Ver menos",

  className = "",

  ...props
}: TextProps) {

  const Tag =
    as as ElementType;

  const classes = [
    "text",

    `text--${size}`,

    `text--${variant}`,

    className,

  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     TEXT
  ====================================== */

  const text = (
    <Tag
      className={classes}
      {...props}
    >
      {children}
    </Tag>
  );

  /* ======================================
     EXPANDABLE
  ====================================== */

  if (expandable) {

    return (

      <ExpandableText
        skeleton={skeleton}
        as={as}
        size={size}
        variant={variant}
        lines={lines}
        expandLabel={expandLabel}
        collapseLabel={collapseLabel}
        className={className}
        {...props}
      >
        {children}
      </ExpandableText>

    );

  }

  /* ======================================
     SKELETON
  ====================================== */

  if (skeleton) {

    return (
      <Skeleton>
        {text}
      </Skeleton>
    );

  }

  /* ======================================
     RENDER
  ====================================== */

  return text;

}