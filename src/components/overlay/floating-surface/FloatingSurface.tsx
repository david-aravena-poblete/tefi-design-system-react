/* ======================================
   IMPORTS
====================================== */

import "./floating-surface.css";
import type { FloatingSurfaceProps } from "./floating-surface.types";

/* ======================================
   FLOATING SURFACE
====================================== */

export function FloatingSurface({
  children,

  open = false,

  className = "",

  ...rest
}: FloatingSurfaceProps) {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "floating-surface",

    open &&
      "floating-surface--open",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div
      className={classes}

      data-open={open}

      {...rest}
    >
      {children}
    </div>
  );
}

export default FloatingSurface;