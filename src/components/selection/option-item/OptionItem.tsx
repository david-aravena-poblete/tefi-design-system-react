/* ======================================
   IMPORTS
====================================== */

import "./option-item.css";
import type { OptionItemProps } from "./option-item.types";

/* ======================================
   OPTION ITEM BASE
====================================== */

function OptionItemBase({
  children,

  selected = false,

  active = false,

  disabled = false,

  className = "",

  ...rest
}: OptionItemProps) {
  /* ======================================
     CLASSES
  ====================================== */

  const classes = ["option-item", className].filter(Boolean).join(" ");

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div
      role="option"

      aria-selected={selected}

      aria-disabled={disabled}

      data-active={active}

      className={classes}

      {...rest}
    >
      {children}
    </div>
  );
}

/* ======================================
   OPTION ITEM
====================================== */

export const OptionItem = OptionItemBase;
