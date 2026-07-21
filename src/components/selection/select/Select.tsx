/* ======================================
   IMPORTS
====================================== */

import { useEffect, useId, useMemo, useRef, useState } from "react";

import clsx from "clsx";

import "./select.css";

import { OptionList } from "../option-list";

import type { SelectProps } from "./select.types";

/* ======================================
   SELECT
====================================== */

export function Select({
  options = [],

  value = null,

  placeholder = "Select...",

  disabled = false,

  onChange,

  className,

  ...rest
}: SelectProps) {
  /* ======================================
     STATE
  ====================================== */

  const [open, setOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);

  const listId = useId();

  /* ======================================
   SELECTED OPTION
====================================== */

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value) ?? null,
    [options, value],
  );

  const selectedIndex = useMemo(
    () => options.findIndex((option) => option.value === value),
    [options, value],
  );

  /* ======================================
     CLOSE OUTSIDE
  ====================================== */

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (rootRef.current && !event.composedPath().includes(rootRef.current)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(
    "select",

    className,
  );

  /* ======================================
     HANDLERS
  ====================================== */

  function handleToggle() {
    if (disabled) {
      return;
    }

    setOpen((current) => !current);
  }

  function handleChange(nextValue: string) {
    onChange?.(nextValue);

    setOpen(false);
  }

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div
      ref={rootRef}

      className={classes}

      aria-disabled={disabled}

      data-open={open}

      {...rest}
    >
      <button
        type="button"

        className="select__trigger"

        disabled={disabled}

        aria-haspopup="listbox"

        aria-expanded={open}

        aria-controls={listId}

        onClick={handleToggle}
      >
        <span className="select__value">{selectedOption?.label ?? placeholder}</span>

        <span
          className="select__arrow"

          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="select__content">
          <OptionList
            id={listId}

            embedded

            options={options}

            value={value}

            initialActiveIndex={selectedIndex}

            disabled={disabled}

            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
