/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./text.css";

import type { ComponentPropsWithoutRef } from "react";

import { Skeleton } from "@/primitives";

import { renderPolymorphic } from "@/render/polymorphic";
import type { As } from "@/foundations/contracts/polymorphic.contract";

import { ExpandableText } from "./ExpandableText";

import type { TextProps } from "./text.types";

/* ======================================
   TEXT
====================================== */

export function Text<
  T extends As = "p",
>(
  props: TextProps<T>,
) {
  /* ======================================
     PROPS
  ====================================== */

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

  const classes = clsx(
    "text",
    `text--${size}`,
    `text--${variant}`,
    className,
  );

  /* ======================================
     CONTENT
  ====================================== */

  const elementProps = {
    className: classes,
    ...rest,
    children,
  } as ComponentPropsWithoutRef<T>;

  const text = renderPolymorphic(
    Component,
    elementProps,
  );

  /* ======================================
     CONDITIONAL RENDER
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