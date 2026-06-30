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
import { Button } from "@/components/button";

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
     CONTENT
  ====================================== */

  const content = (
    <Tag
      className={classes}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  );

  /* ======================================
     RENDER
  ====================================== */

  return (

    <div className="read-more">

      {skeleton ? (

        <Skeleton>
          {content}
        </Skeleton>

      ) : (

        content

      )}

      <Button
        variant="link"
        skeleton={skeleton}
        disabled={skeleton}
        onClick={() =>
          setExpanded(!expanded)
        }
      >
        {expanded
          ? collapseLabel
          : expandLabel}
      </Button>

    </div>

  );

}