import clsx from "clsx";

import "./container.css";

import type {
  ContainerProps,
} from "@/layouts/container/container.types";

/* ======================================
   CONTAINER
====================================== */

export function Container({
  children,

  as: Component = "div",

  size = "md",

  paddingTop,

  paddingBottom,

  className,

  ...props
}: ContainerProps) {

  const classes = clsx(
    "container",

    `container--${size}`,

    paddingTop &&
      `container--pt-${paddingTop}`,

    paddingBottom &&
      `container--pb-${paddingBottom}`,

    className,
  );

  return (
    <Component
      className={classes}
      {...props}
    >
      {children}
    </Component>
  );
}