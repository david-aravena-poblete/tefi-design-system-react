import clsx from "clsx";
import "./stack.css";
import type { StackProps } from "@/layouts/stack/stack.types";


/* ======================================
   STACK
====================================== */

export function Stack({
  children,
  as: Component = "div",
  gap = "md",
  align,
  justify,
  className,
  ...props
}: StackProps) {

  const classes = clsx(
    "stack",

    `stack--gap-${gap}`,

    align && `stack--align-${align}`,

    justify && `stack--justify-${justify}`,

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