/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import { Inline } from "../../layouts/inline";
import { Skeleton } from "../../primitives/skeleton";
import { Spinner } from "../../primitives/spinner";

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

  const isDisabled = loading || disabled;

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
     CONTENT
  ====================================== */

  const button = (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      <Inline as="span" gap="sm" align="center">
        {startIcon}

        {children}

        {endIcon}

        {loading && <Spinner size="sm" />}
      </Inline>
    </button>
  );

  /* ======================================
     SPECIAL STATES
  ====================================== */

  if (skeleton) {
    return (
      <Skeleton fill={fullWidth} radius="var(--surface-button-radius)">
        {button}
      </Skeleton>
    );
  }

  /* ======================================
     RENDER
  ====================================== */

  return button;
}