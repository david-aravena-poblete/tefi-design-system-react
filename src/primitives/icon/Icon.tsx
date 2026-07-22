/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./icon.css";

import { iconRegistry } from "./icons/icons.registry";

import type { IconProps } from "./icon.types";

/* ======================================
   ICON
====================================== */

export function Icon({
  /* ======================================
     TEFI PROPS
  ====================================== */

  name,

  size = "md",

  ariaHidden = true,

  /* ======================================
     REACT PROPS
  ====================================== */

  className,

  children,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: IconProps) {
  /* ======================================
     DERIVED STATE
  ====================================== */

  const IconComponent = name ? iconRegistry[name] : undefined;

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "icon",
    `icon--${size}`,
    className,
  );

  /* ======================================
     CONDITIONAL RENDER
  ====================================== */

  if (name && !IconComponent) {
    console.warn(`Icon "${name}" not found in registry.`);
  }

  /* ======================================
     RENDER
  ====================================== */

  return (
    <span
      className={classes}
      aria-hidden={ariaHidden}
      {...rest}
    >
      {IconComponent ? <IconComponent /> : children}
    </span>
  );
}