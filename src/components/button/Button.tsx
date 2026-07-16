/* ======================================
   IMPORTS
====================================== */
import clsx from "clsx";

import "./button.css";

import { Inline } from "../../layouts/inline";

import { Spinner } from "../../primitives/spinner";
import { Skeleton } from "../../primitives/skeleton";

import type {
  ButtonProps,
} from "./button.types";

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
     DERIVED
  ====================================== */

  const isDisabled =
    loading || disabled;

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

  const content = (

    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >

      <Inline
        as="span"
        gap="sm"
        align="center"
      >

        {startIcon}
        {children}
        {endIcon}

        {loading && (
          <Spinner size="sm" />
        )}

      </Inline>

    </button>

  );

  /* ======================================
     SKELETON
  ====================================== */

  if (skeleton) {

    return (
  
      <Skeleton
        fill={fullWidth}
        radius="var(--surface-button-radius)"
      >
  
        {content}
  
      </Skeleton>
  
    );
  
  }

  /* ======================================
     RENDER
  ====================================== */

  return content;

}