/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { splitProps } from "@/laboratory/core/split-props";

import { html } from "@/laboratory/capabilities/html";
import {
  interaction,
  interactionCapabilities,
} from "@/laboratory/capabilities/interaction";
import { layout, layoutCapabilities } from "@/laboratory/capabilities/layout";
import { surface, surfaceCapabilities } from "@/laboratory/capabilities/surface";

import { useDragScroll } from "@/laboratory/capabilities/interaction/use-drag-scroll";

import type { BoxHtml, BoxProps } from "./box.types";

/* ======================================
   DEFAULTS
====================================== */

const defaultHtml: BoxHtml = "div";

/* ======================================
   BOX
====================================== */

export function Box<T extends BoxHtml = "div">({
  children,
  as,
  className,
  dragScroll,
  ...props
}: BoxProps<T>) {
  const Html = html({
    as: as ?? defaultHtml,
  }) as ElementType;

  const allProps = {
    ...props,
    dragScroll,
  };

  const { htmlProps } = splitProps(
    allProps as Record<string, unknown>,
    [
      ...layoutCapabilities,
      ...interactionCapabilities,
      ...surfaceCapabilities,
    ],
  );

  const dragScrollProps = useDragScroll(dragScroll);

  const scrollTabIndex =
    props.scroll && props.tabIndex === undefined
      ? 0
      : props.tabIndex;

  const componentClassName = createClassName(
    layout(allProps),
    interaction(allProps),
    surface(allProps),
    className,
  );

  return (
    <Html
      {...htmlProps}
      tabIndex={scrollTabIndex}
      {...dragScrollProps}
      className={componentClassName}
    >
      {children}
    </Html>
  );
}