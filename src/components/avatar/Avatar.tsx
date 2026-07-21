/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./avatar.css";

import { Icon } from "@/primitives/icon";

import { Image } from "@/primitives/image";

import type { AvatarProps } from "./avatar.types";

/* ======================================
   AVATAR
====================================== */

export function Avatar({
  /* ======================================
     TEFI PROPS
  ====================================== */

  src,

  alt,

  size = "md",

  shape = "circle",

  fallback,

  /* ======================================
     REACT PROPS
  ====================================== */

  className,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: AvatarProps) {
  /* ======================================
     HELPERS
  ====================================== */

  const initials = alt
    ?.trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "avatar",

    `avatar--${size}`,

    `avatar--${shape}`,

    className,
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <span className={classes} {...rest}>
      {src ? (
        <Image className="avatar__image" src={src} alt={alt} aspect="1:1" />
      ) : (
        <span className="avatar__fallback">{fallback ?? initials ?? <Icon name="user" />}</span>
      )}
    </span>
  );
}
