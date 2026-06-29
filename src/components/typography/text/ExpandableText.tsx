/* ======================================
   IMPORTS
====================================== */

import {
  useState,
  type CSSProperties,
  type ElementType,
} from "react";

import "./text.css";

import { Skeleton } from "@/primitives";

import type {
  TextProps,
} from "./text.types";

/* ======================================
   EXPANDABLE TEXT
====================================== */

interface ExpandableTextProps
  extends TextProps {

  lines?: number;

  expandLabel?: string;

  collapseLabel?: string;

}

/* ======================================
   COMPONENT
====================================== */

export function ExpandableText({
  children,

  as = "p",

  size = "md",

  variant = "default",

  skeleton = false,

  lines = 4,

  expandLabel = "Ver más",

  collapseLabel = "Ver menos",

  className = "",

  ...props
}: ExpandableTextProps) {

  const [expanded, setExpanded] =
    useState(false);

  const Tag =
    as as ElementType;

  const classes = [
    "text",

    `text--${size}`,

    `text--${variant}`,

    !expanded &&
      "read-more__content--clamp",

    className,

  ]
    .filter(Boolean)
    .join(" ");

  const style: CSSProperties =
    expanded
      ? {}
      : {
          WebkitLineClamp: lines,
        };

  /* ======================================
     SKELETON
  ====================================== */

  if (skeleton) {

    return (

      <div className="read-more">

        <Skeleton>

          <Tag
            className={classes}
            style={style}
            {...props}
          >
            {children}
          </Tag>

        </Skeleton>

        <Skeleton>

          <button
            type="button"
            className="read-more__toggle"
          >
            {expandLabel}
          </button>

        </Skeleton>

      </div>

    );

  }

  /* ======================================
     RENDER
  ====================================== */

  return (

    <div className="read-more">

      <Tag
        className={classes}
        style={style}
        {...props}
      >
        {children}
      </Tag>

      <button
        type="button"
        className="read-more__toggle"
        onClick={() =>
          setExpanded(!expanded)
        }
      >
        {expanded
          ? collapseLabel
          : expandLabel}
      </button>

    </div>

  );

}