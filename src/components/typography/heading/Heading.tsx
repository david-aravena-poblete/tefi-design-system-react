/* ======================================
   IMPORTS
====================================== */

import type {
  ElementType,
} from "react";

import "./heading.css";

import { Skeleton } from "@/primitives";

import type {
  HeadingProps,
} from "./heading.types";

/* ======================================
   HEADING
====================================== */

export function Heading({
  children,

  level = 1,

  skeleton = false,

  className = "",

  ...props
}: HeadingProps) {

  /* ======================================
     SAFE LEVEL
  ====================================== */

  const safeLevel =
    level >= 1 &&
    level <= 6
      ? level
      : 1;

  /* ======================================
     TAG
  ====================================== */

  const Tag =
    `h${safeLevel}` as ElementType;

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "heading",

    `heading-${safeLevel}`,

    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     HEADING
  ====================================== */

  const heading = (
    <Tag
      className={classes}
      {...props}
    >
      {children}
    </Tag>
  );

  /* ======================================
     SKELETON
  ====================================== */

  if (skeleton) {

    return (
      <Skeleton>
        {heading}
      </Skeleton>
    );

  }

  /* ======================================
     RENDER
  ====================================== */

  return heading;

} 