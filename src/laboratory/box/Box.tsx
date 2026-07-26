import "./box.css";
import "../interaction/interaction.css";

import type {
  ComponentPropsWithoutRef,
  ElementType,
} from "react";

import { compose } from "../compose";
import { composeInteraction } from "../interaction/compose-interaction";

import type { HtmlElement } from "../tokens";
import type { BoxProps } from "./box.types";

export function Box<T extends HtmlElement = "div">({
  children,
  html = "div" as T,
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
  surface,
  background,
  text,
  fontSize,
  fontWeight,
  border,
  hover,
  press,
  focusRing,
  transition,
  className,
  ...htmlProps
}: BoxProps<T>) {
  const Component = html as ElementType;

  const capabilityClassName = compose({
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
    surface,
    background,
    text,
    fontSize,
    fontWeight,
    border,
  });

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
    htmlProps as ComponentPropsWithoutRef<T>;

  return (
    <Component
      {...componentProps}
      className={boxClassName}
    >
      {children}
    </Component>
  );
}