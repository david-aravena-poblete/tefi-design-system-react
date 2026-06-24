/* ======================================
IMPORTS
====================================== */

import clsx from "clsx";

import "./skeleton.css";

import type {
SkeletonProps,
} from "./skeleton.types";

/* ======================================
VARIANTS
====================================== */

const variants = {
heading: {
width: "70%",
height: "22px",
},

text: {
width: "100%",
height: "56px",
},

button: {
width: "100%",
height: "44px",
},
} as const;

/* ======================================
SKELETON
====================================== */

export function Skeleton({
children,

loading = true,

width,

height,

radius = "8px",

animated = true,

ratio,

variant,

className,

style,

...props
}: SkeletonProps) {

const preset =
variant
? variants[variant]
: undefined;

const classes = clsx(
"skeleton",

ratio &&
  `skeleton--${ratio.replace(":", "-")}`,

animated &&
  "skeleton--animated",

className

);

/* ======================================
WRAPPER MODE
====================================== */

if (children !== undefined) {

if (!loading) {
  return <>{children}</>;
}

return (
  <div
    className="skeleton-wrapper"
  >

    <div
      className="
        skeleton-content
        skeleton-content--hidden
      "
    >
      {children}
    </div>

    <div
      className={classes}
      style={{
        borderRadius: radius,
      }}
    />

  </div>
);

}

/* ======================================
DEFAULT MODE
====================================== */

return (
<div
className={classes}

  style={{
    width:
      width ??
      preset?.width ??
      "100%",

    height:
      ratio
        ? undefined
        : (
            height ??
            preset?.height ??
            "1rem"
          ),

    borderRadius: radius,

    ...style,
  }}

  {...props}
/>

);
}