/* ======================================
   IMPORTS
====================================== */

import {
  forwardRef,
} from "react";

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

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children,

      startIcon,

      endIcon,

      type = "button",

      variant = "primary",

      size = "md",

      fullWidth = false,

      loading = false,

      skeleton = false,

      disabled,

      className,

      ...rest
    },
    ref
  ) => {

    /* ======================================
       DERIVED
    ====================================== */

    const isDisabled =
      disabled || loading;

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
       BUTTON
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

        <Inline
          as="span"
          gap="sm"
          align="center"
        >

          {startIcon}

          {children}

          {endIcon}

          {loading && (

            <Spinner
              size="sm"
            />

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
        >

          {button}

        </Skeleton>

      );

    }

    /* ======================================
       RENDER
    ====================================== */

    return button;

  }
);

Button.displayName =
  "Button";