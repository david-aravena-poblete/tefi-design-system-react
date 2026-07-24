import "./box.css";

import { compose } from "../compose";

import type { BoxProps } from "./box.types";

export function Box({
  children,
  html = "div",
  direction,
  align,
  justify,
  inside,
  outside,
  between,
  radius,
  maxWidth,
  surface,
  text,
  border,
  className,
  ...htmlProps
}: BoxProps) {
  const Component = html;

  const capabilityClassName = compose({
    direction,
    align,
    justify,
    inside,
    outside,
    between,
    radius,
    maxWidth,
    surface,
    text,
    border,
  });

  const boxClassName = [
    capabilityClassName,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      {...htmlProps}
      className={boxClassName}
    >
      {children}
    </Component>
  );
}