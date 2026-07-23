/* ======================================
   IMPORTS
====================================== */

import { useState, type CSSProperties } from "react";

import clsx from "clsx";

import "./expandable-text.css";

import { Skeleton } from "@/primitives";
import { Button } from "@/components/button";

import type { ExpandableTextProps } from "./expandable-text.types";

/* ======================================
   COMPONENT
====================================== */

export function ExpandableText({
  children,

  skeleton = false,

  lines = 4,

  expandLabel = "Ver más",

  collapseLabel = "Ver menos",
}: ExpandableTextProps) {
  /* ======================================
     STATE
  ====================================== */

  const [expanded, setExpanded] = useState(false);

  /* ======================================
     STYLES
  ====================================== */

  const style = {
    "--line-clamp": lines,
  } as CSSProperties;

  /* ======================================
     CONTENT
  ====================================== */

  const content = (
    <div
      className={clsx(
        "expandable-text__content",
        !expanded && "expandable-text__content--collapsed",
      )}
      style={style}
    >
      {children}
    </div>
  );

  const button = (
    <Button
      variant="link"
      skeleton={skeleton}
      disabled={skeleton}
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? collapseLabel : expandLabel}
    </Button>
  );

  /* ======================================
     CONDITIONAL RENDER
  ====================================== */

  if (skeleton) {
    return (
      <div className="expandable-text">
        <Skeleton radius="var(--radius-md)">{content}</Skeleton>

        {button}
      </div>
    );
  }

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div className="expandable-text">
      {content}

      {button}
    </div>
  );
}
