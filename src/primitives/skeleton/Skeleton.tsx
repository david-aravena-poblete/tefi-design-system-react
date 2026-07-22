/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./skeleton.css";

import type { SkeletonProps } from "./skeleton.types";

/* ======================================
   SKELETON
====================================== */

export function Skeleton({
  /* ======================================
     TEFI PROPS
  ====================================== */

  fill = false,

  width = "100%",

  height,

  radius = "inherit",

  animated = true,

  aspect,

  /* ======================================
     REACT PROPS
  ====================================== */

  className,

  style,

  children,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: SkeletonProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "skeleton",

    aspect && `skeleton--${aspect.replace(":", "-")}`,

    {
      "skeleton--animated": animated,
    },

    className,
  );

  /* ======================================
     CONTENT
  ====================================== */

  const skeleton = (
    <div
      className={classes}
      style={{
        width,

        height: aspect ? undefined : height,

        borderRadius: radius,

        ...style,
      }}
      {...rest}
    />
  );

  /* ======================================
     CONDITIONAL RENDER
  ====================================== */

  if (children !== undefined) {
    return (
      <div
        className={clsx("skeleton-wrapper", {
          "skeleton-wrapper--fill": fill,
        })}
      >
        <div className="skeleton-content skeleton-content--hidden">
          {children}
        </div>

        {skeleton}
      </div>
    );
  }

  /* ======================================
     RENDER
  ====================================== */

  return skeleton;
}