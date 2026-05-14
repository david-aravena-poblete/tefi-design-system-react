import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

import clsx from "clsx";

import "./button.css";

import { Spinner } from "../../primitives/spinner";

import type {ButtonVariant, ButtonSize} from "./button.types";

/* ======================================
   TYPES
====================================== */

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: ButtonVariant;
  size?: ButtonSize;

  fullWidth?: boolean;

  loading?: boolean;

  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

/* ======================================
   BUTTON
====================================== */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,

      type = "button",

      variant = "primary",
      size = "md",

      fullWidth = false,

      loading = false,

      disabled,

      iconLeft,
      iconRight,

      className,

      ...rest
    },
    ref
  ) => {

    /* ======================================
       DERIVED STATE
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

      className
    );

    /* ======================================
       RENDER
    ====================================== */

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={isDisabled}
        aria-busy={loading}
        {...rest}
      >
        {iconLeft && !loading && (
          <span
            className="button__icon button__icon--left"
            data-slot="icon-left"
          >
            {iconLeft}
          </span>
        )}

        <span
          className="button__label"
          data-slot="label"
        >
          {children}
        </span>

        {loading && (
          <span
            className="button__spinner"
            data-slot="spinner"
          >
            <Spinner size="sm" />
          </span>
        )}

        {iconRight && !loading && (
          <span
            className="button__icon button__icon--right"
            data-slot="icon-right"
          >
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";