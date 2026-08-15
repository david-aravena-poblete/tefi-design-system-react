/* ======================================
   IMPORTS
====================================== */

import { useState, type CSSProperties } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { layout } from "@/laboratory/capabilities/layout";

import { Skeleton } from "@/primitives/skeleton";
import { Button } from "@/components/button";

import type { LayoutProps } from "@/laboratory/capabilities/layout";

import type { ExpandableTextProps } from "./expandable-text.types";

import "./expandable-text.css";

/* ======================================
   DEFAULTS
====================================== */

const defaultLayout: LayoutProps = {
  display: "flex",
  direction: "column",
  between: "xs",
  fill: true,
};

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

  const contentStyle = {
    "--line-clamp": lines,
  } as CSSProperties;

  /* ======================================
     CONTENT
  ====================================== */

  const content = (
    <div
      className={createClassName(
        "expandable-text__content",
        !expanded ? "expandable-text__content--collapsed" : undefined,
      )}
      style={contentStyle}
    >
      {children}
    </div>
  );

  /* ======================================
     BUTTON
  ====================================== */

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
     CLASS NAME
  ====================================== */

  const componentClassName = createClassName("expandable-text", layout(defaultLayout));

  /* ======================================
     CONDITIONAL RENDER
  ====================================== */

  if (skeleton) {
    return (
      <div className={componentClassName}>
        <Skeleton radius="md">{content}</Skeleton>

        {button}
      </div>
    );
  }

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div className={componentClassName}>
      {content}

      {button}
    </div>
  );
}
