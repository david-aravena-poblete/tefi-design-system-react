/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./skeleton.css";

import type {
  SkeletonProps,
} from "./skeleton.types";

/* ======================================
   SKELETON
====================================== */

export function Skeleton({
  children,

  fill = false,

  width = "100%",

  height,

  radius = "8px",

  animated = true,

  ratio,

  className,

  style,

  ...props
}: SkeletonProps) {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "skeleton",

    ratio &&
      `skeleton--${ratio.replace(":", "-")}`,

    animated &&
      "skeleton--animated",

    className
  );

  /* ======================================
     BASE
  ====================================== */

  const skeleton = (
    <div
      className={classes}
      style={{
        width,

        height:
          ratio
            ? undefined
            : height,

        borderRadius: radius,

        ...style,
      }}

      {...props}
    />
  );

  /* ======================================
     WRAPPER
  ====================================== */

  if (children !== undefined) {

    return (
      <div
        className={clsx(
          "skeleton-wrapper",
          {
            "skeleton-wrapper--fill": fill,
          }
        )}
      >

        <div
          className="
            skeleton-content
            skeleton-content--hidden
          "
        >
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