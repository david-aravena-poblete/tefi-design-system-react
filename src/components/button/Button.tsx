/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import { Skeleton } from "@/primitives/skeleton";
import { Spinner } from "@/primitives/spinner";

import "./button.css";

import type { ButtonProps } from "./button.types";

/* ======================================
   BUTTON
====================================== */

export function Button({
  /* ======================================
     TEFI PROPS
  ====================================== */

  variant = "primary",

  size = "md",

  fullWidth = false,

  loading = false,

  skeleton = false,

  startIcon,

  endIcon,

  /* ======================================
     REACT PROPS
  ====================================== */

  type = "button",

  disabled,

  className,

  children,

  ref,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: ButtonProps) {
  /* ======================================
     DERIVED STATE
  ====================================== */

  const isDisabled = disabled || loading;

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "button",

    `button--${variant}`,

    `button--${size}`,

    {
      "button--full": fullWidth,

      "button--loading": loading,
    },

    className,
  );

  /* ======================================
     ELEMENT
  ====================================== */

  const element = (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      <span className="button__content">
        {startIcon}

        {children}

        {endIcon}

        {loading && <Spinner size="sm" />}
      </span>
    </button>
  );

  /* ======================================
     CONDITIONAL RENDER
  ====================================== */

  if (skeleton) {
    return (
      <Skeleton fill={fullWidth} radius="var(--surface-button-radius)">
        {element}
      </Skeleton>
    );
  }

  /* ======================================
     RENDER
  ====================================== */

  return element;
}