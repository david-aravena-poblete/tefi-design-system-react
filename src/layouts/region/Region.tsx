import "./region.css";

import clsx from "clsx";

import type { RegionProps } from "./region.types";

export function Region({
  children,
  className,
  ...restProps
}: RegionProps) {

  /* ======================================
      CLASSES
  ====================================== */

  const classes = clsx(
    "region",
    className,
  );

  /* ======================================
      CONTENT
  ====================================== */

  const content = children;

  /* ======================================
      RENDER
  ====================================== */

  return (
    <div
      className={classes}
      {...restProps}
    >
      {content}
    </div>
  );
}