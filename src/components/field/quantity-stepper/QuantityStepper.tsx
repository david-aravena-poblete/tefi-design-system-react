/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";
import "./quantity-stepper.css";
import { FIELD_SIZES } from "@/shared/field.constants";
import type { QuantityStepperProps } from "./quantity-stepper.types";

/* ======================================
   QUANTITY STEPPER
====================================== */

export function QuantityStepper({
  value,

  defaultValue = 1,

  onChange,

  min = 1,

  max = 99,

  size = "md",

  disabled = false,

  className = "",

  ...rest
}: QuantityStepperProps) {

  /* ======================================
     CONTROLLED
  ====================================== */

  const isControlled =
    value !== undefined;

  const [internal, setInternal] =
    useState(defaultValue);

  /* ======================================
     DERIVED
  ====================================== */

  const current =
    isControlled
      ? value
      : internal;

  const safeSize =
    FIELD_SIZES.includes(size)
      ? size
      : "md";

  /* ======================================
     UPDATE
  ====================================== */

  function update(next: number) {

    const clamped = Math.min(
      max,
      Math.max(min, next)
    );

    if (!isControlled) {
      setInternal(clamped);
    }

    onChange?.(clamped);
  }

  /* ======================================
     ACTIONS
  ====================================== */

  function decrease() {

    if (
      disabled ||
      current <= min
    ) {
      return;
    }

    update(current - 1);
  }

  function increase() {

    if (
      disabled ||
      current >= max
    ) {
      return;
    }

    update(current + 1);
  }

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "quantity-stepper",

    `quantity-stepper--${safeSize}`,

    disabled &&
      "quantity-stepper--disabled",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div
      className={classes}

      {...rest}
    >

      {/* DECREASE */}

      <button
        type="button"

        className="
          quantity-stepper__button
        "

        onClick={decrease}

        disabled={
          disabled ||
          current <= min
        }

        aria-label="
          Decrease quantity
        "
      >
        −
      </button>

      {/* VALUE */}

      <span
        className="
          quantity-stepper__value
        "
      >
        {current}
      </span>

      {/* INCREASE */}

      <button
        type="button"

        className="
          quantity-stepper__button
        "

        onClick={increase}

        disabled={
          disabled ||
          current >= max
        }

        aria-label="
          Increase quantity
        "
      >
        +
      </button>

    </div>
  );
}