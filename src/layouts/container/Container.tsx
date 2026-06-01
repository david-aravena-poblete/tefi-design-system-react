import clsx from "clsx";
import "./container.css";
import type { ContainerProps } from "@/layouts/container/container.types";


/* ======================================
   CONTAINER
====================================== */

export function Container({
  children,
  as: Component = "div",
  size = "md",
  className,
  ...props
}: ContainerProps) {

  const classes = clsx(
    "container",

    `container--${size}`,

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