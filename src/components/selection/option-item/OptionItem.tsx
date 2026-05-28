/* ======================================
   IMPORTS
====================================== */

import "./option-item.css";

import type {
  OptionItemProps,
} from "./option-item.types";

/* ======================================
   OPTION ITEM
====================================== */

export function OptionItem({
  label,

  selected = false,

  active = false,

  disabled = false,

  className = "",

  ...rest
}: OptionItemProps) {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "option-item",

    selected &&
      "option-item--selected",

    active &&
      "option-item--active",

    disabled &&
      "option-item--disabled",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div
      role="option"

      aria-selected={selected}

      data-selected={selected}

      data-active={active}

      data-disabled={disabled}

      className={classes}

      {...rest}
    >
      {label}
    </div>
  );
}