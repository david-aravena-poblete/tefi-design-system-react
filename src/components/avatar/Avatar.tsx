/* ======================================
   IMPORTS
====================================== */

import type {
  ElementType,
} from "react";

import clsx from "clsx";

import "./avatar.css";

import {
  Image,
} from "@/primitives/image";

import {
  Icon,
} from "@/primitives/icon";

import type {
  AvatarProps,
} from "./avatar.types";

/* ======================================
   AVATAR
====================================== */

export function Avatar<
  T extends ElementType = "span",
>({

  /* ======================================
     TEFI PROPS
  ====================================== */

  as,

  size = "md",

  shape = "circle",

  fallback,

  src,

  alt,

  /* ======================================
     REACT PROPS
  ====================================== */

  className,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest

}: AvatarProps<T>) {

  /* ======================================
     COMPONENT
  ====================================== */

  const Component =
    as ?? "span";

  /* ======================================
     HELPERS
  ====================================== */

  const initials = alt
    ?.trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(
      (word) => word[0]?.toUpperCase(),
    )
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

    <Component
      className={classes}
      {...rest}
    >

      {src ? (

        <Image
          className="avatar__image"
          src={src}
          alt={alt}
          aspect="1:1"
        />

      ) : (

        <span className="avatar__fallback">

          {fallback
            ?? initials
            ?? (
              <Icon
                name="user"
              />
            )}

        </span>

      )}

    </Component>

  );

}