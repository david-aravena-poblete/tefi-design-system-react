/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";
import { extractProps } from "@/laboratory/core/extract-props";

import { html } from "@/laboratory/capabilities/html";

import { layout, layoutCapabilities } from "@/laboratory/capabilities/layout";

import { surface, surfaceCapabilities } from "@/laboratory/capabilities/surface";

import "./skeleton.css";

import type { SkeletonProps } from "./skeleton.types";

/* ======================================
   CONSTANTS
====================================== */

const defaultHtml = "div";

/* ======================================
   SKELETON
====================================== */

export function Skeleton({
  children,

  className,

  as,

  ...props
}: SkeletonProps) {
  const htmlElement = as ?? defaultHtml;

  const Html = html({
    as: htmlElement,
  }) as ElementType;

  const { consumed: layoutProps, remaining: remainingAfterLayout } = extractProps(
    props,
    layoutCapabilities,
  );

  const { consumed: surfaceProps, remaining: htmlProps } = extractProps(
    remainingAfterLayout,
    surfaceCapabilities,
  );

  const componentClassName = createClassName(
    "skeleton",
    layout(layoutProps),
    surface(surfaceProps),
    className,
  );

  const skeleton = <Html {...htmlProps} className={componentClassName} />;

  /* ======================================
     CONDITIONAL RENDER
  ====================================== */

  if (children !== undefined) {
    const wrapperClassName = createClassName(
      "skeleton-wrapper",
      layout({
        fill: layoutProps.fill,
      }),
    );

    return (
      <div className={wrapperClassName}>
        <div className="skeleton-content skeleton-content--hidden">{children}</div>

        {skeleton}
      </div>
    );
  }

  return skeleton;
}
