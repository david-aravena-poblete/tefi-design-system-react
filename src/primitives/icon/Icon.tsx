import clsx from "clsx";

import "./icon.css";

import { iconRegistry } from "./icons/icons.registry";

import type {
  IconProps,
} from "./icon.types";

/* ======================================
   ICON
====================================== */

export function Icon({
  name,

  size = "md",

  className,

  children,

  ariaHidden = true,

  ...props
}: IconProps) {

  /* ======================================
     RESOLVE ICON
  ====================================== */

  const IconComponent = name
    ? iconRegistry[name as keyof typeof iconRegistry]
    : null;

  if (name && !IconComponent) {
    console.warn(
      `Icon "${name}" not found in registry.`
    );
  }

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "icon",
    `icon--${size}`,
    className
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <span
      className={classes}
      aria-hidden={ariaHidden}
      {...props}
    >
      {IconComponent
        ? <IconComponent />
        : children}
    </span>
  );
}