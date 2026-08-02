/* ======================================
   STYLES
====================================== */

import "./box.css";
import "../interaction/interaction.css";

/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentPropsWithoutRef,
  ElementType,
} from "react";

import { compose } from "../core/compose";
import { composeInteraction } from "../interaction/compose-interaction";

import type { HtmlElement } from "../tokens";

import type { BoxProps } from "./box.types";

/* ======================================
   CAPABILITIES
====================================== */

const boxCapabilities = [
  "display",
  "direction",
  "between",
  "align",
  "justify",
  "inside",
  "insideX",
  "insideY",
  "outside",
  "radius",
  "maxWidth",
  "minHeight",
  "background",
  "color",
  "border",
] as const;

/* ======================================
   COMPONENT
====================================== */

export function Box<T extends HtmlElement = "div">({
  children,
  as = "div" as T,
  display,
  direction,
  align,
  justify,
  inside,
  insideX,
  insideY,
  outside,
  between,
  radius,
  maxWidth,
  minHeight,
  background,
  color,
  border,
  hover,
  press,
  focusRing,
  transition,
  className,
  ...elementProps
}: BoxProps<T>) {
  const Component = as as ElementType;

  const capabilityClassName = compose(
    "box",
    boxCapabilities,
    {
      display,
      direction,
      align,
      justify,
      inside,
      insideX,
      insideY,
      outside,
      between,
      radius,
      maxWidth,
      minHeight,
      background,
      color,
      border,
    },
  );

  const interactionClassName = composeInteraction({
    hover,
    press,
    focusRing,
    transition,
  });

  const boxClassName = [
    capabilityClassName,
    interactionClassName,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const componentProps =
    elementProps as ComponentPropsWithoutRef<T>;

  return (
    <Component
      {...componentProps}
      className={boxClassName}
    >
      {children}
    </Component>
  );
}