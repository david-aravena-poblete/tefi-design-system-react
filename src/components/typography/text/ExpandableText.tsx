/* ======================================
   IMPORTS
====================================== */

import { useState, type CSSProperties } from "react";

import clsx from "clsx";

import "./text.css";

import { Skeleton } from "@/primitives";
import { Button } from "@/components/button";

import type { TextProps } from "./text.types";

/* ======================================
   EXPANDABLE TEXT
====================================== */

interface ExpandableTextProps extends TextProps {
  lines?: number;

  expandLabel?: string;

  collapseLabel?: string;
}

/* ======================================
   COMPONENT
====================================== */

export function ExpandableText({
  /* ======================================
     TEFI PROPS
  ====================================== */

  size = "md",

  variant = "default",

  skeleton = false,

  lines = 4,

  expandLabel = "Ver más",

  collapseLabel = "Ver menos",

  /* ======================================
     REACT PROPS
  ====================================== */

  className = "",

  children,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "text",
    `text--${size}`,
    `text--${variant}`,
    {
      "read-more__content--clamp": !expanded,
    },
    className,
  );

  /* ======================================
     STYLE
  ====================================== */

  const style: CSSProperties = expanded
    ? {}
    : {
        WebkitLineClamp: lines,
      };

  /* ======================================
     CONTENT
  ====================================== */

  const content = (
    <p className={classes} style={style} {...rest}>
      {children}
    </p>
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div className="read-more">
      {skeleton ? <Skeleton>{content}</Skeleton> : content}

      <Button
        variant="link"
        skeleton={skeleton}
        disabled={skeleton}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? collapseLabel : expandLabel}
      </Button>
    </div>
  );
}