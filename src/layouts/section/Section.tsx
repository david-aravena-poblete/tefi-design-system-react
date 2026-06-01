import clsx from "clsx";
import "./section.css";
import type { SectionProps } from "./section.types";


/* ======================================
   SECTION
====================================== */

export function Section({
  children,
  as: Component = "section",
  size = "md",
  className,
  ...props
}: SectionProps) {

  const classes = clsx(
    "section",

    `section--${size}`,

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