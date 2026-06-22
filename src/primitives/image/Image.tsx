import clsx from "clsx";

import "./image.css";

import type {
  ImageProps,
} from "./image.types";

/* ======================================
   IMAGE
====================================== */

export function Image({
  fit = "cover",

  ratio = "16:9",

  className,

  alt,

  ...props
}: ImageProps) {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "image",
    `image--${fit}`,
    `image--${ratio.replace(":", "-")}`,
    className
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <img
      className={classes}
      alt={alt}
      {...props}
    />
  );
}