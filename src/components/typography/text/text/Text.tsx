/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./text.css";

import type { ComponentPropsWithoutRef } from "react";

import { Skeleton } from "@/primitives";

import { renderPolymorphic } from "@/render/polymorphic";
import type { As } from "@/foundations/contracts/polymorphic.contract";

import { ExpandableText } from "../expandable-text/ExpandableText";

import type { TextProps } from "./text.types";

/* ======================================
   TEXT
====================================== */

export function Text<T extends As = "p">(props: TextProps<T>) {
  const {
    as,

    size = "md",

    variant = "default",

    skeleton = false,

    expandable = false,

    lines = 4,

    expandLabel = "Ver más",

    collapseLabel = "Ver menos",

    className = "",

    children,

    ...rest
  } = props;

  const Component = (as ?? "p") as T;

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx("text", `text--${size}`, `text--${variant}`, className);

  /* ======================================
     CONTENT
  ====================================== */

  const text = renderPolymorphic(Component, {
    className: classes,
    ...rest,
    children,
  } as ComponentPropsWithoutRef<T>);

  /* ======================================
     CONDITIONAL RENDER
  ====================================== */

  if (expandable) {
    return (
      <ExpandableText
        skeleton={skeleton}
        lines={lines}
        expandLabel={expandLabel}
        collapseLabel={collapseLabel}
      >
        {text}
      </ExpandableText>
    );
  }

  if (skeleton) {
    return <Skeleton radius="var(--radius-md)">{text}</Skeleton>;
  }

  /* ======================================
     RENDER
  ====================================== */

  return text;
}
