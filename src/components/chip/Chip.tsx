/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./chip.css";

import { Inline } from "@/layouts/inline";
import { Icon } from "@/primitives/icon";

import type { ChipProps } from "./chip.types";

/* ======================================
   CHIP
====================================== */

export function Chip({
  children,

  startIcon,

  endIcon,

  size = "md",

  disabled = false,

  removable = false,

  onRemove,

  className,

  ...rest
}: ChipProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "chip",

    `chip--${size}`,

    disabled && "chip--disabled",

    className,
  );

  /* ======================================
     REMOVE
  ====================================== */

  function handleRemove() {
    if (disabled) return;

    onRemove?.();
  }

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div className={classes} {...rest}>
      <Inline as="span" gap="xs" align="center">
        {startIcon}

        {children}

        {endIcon}

        {removable && (
          <button
            type="button"
            className="chip__remove"
            onClick={handleRemove}
            disabled={disabled}
            aria-label="Remove item"
          >
            <Icon name="close" size="sm" />
          </button>
        )}
      </Inline>
    </div>
  );
}
