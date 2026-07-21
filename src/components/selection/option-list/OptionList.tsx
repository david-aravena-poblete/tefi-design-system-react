/* ======================================
   IMPORTS
====================================== */

import { useEffect, useRef, useState } from "react";

import "./option-list.css";

import { OptionItem } from "@/components/selection";

import type { OptionListProps } from "./option-list.types";

/* ======================================
   OPTION LIST BASE
====================================== */

function OptionListBase({
  options = [],

  value = null,

  initialActiveIndex = -1,

  disabled = false,

  embedded = false,

  onChange,

  renderOption,

  className = "",

  ...rest
}: OptionListProps) {
  /* ======================================
     STATE
  ====================================== */

  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const listRef = useRef<HTMLDivElement>(null);

  /* ======================================
     SCROLL ACTIVE
  ====================================== */

  useEffect(() => {
    if (activeIndex < 0) {
      return;
    }

    const item = listRef.current?.children.item(activeIndex);

    item?.scrollIntoView({
      block: "nearest",
    });
  }, [activeIndex]);

  /* ======================================
     KEYBOARD
  ====================================== */

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (disabled) {
      return;
    }

    /* ======================================
       DOWN
    ====================================== */

    if (event.key === "ArrowDown") {
      event.preventDefault();

      let next = activeIndex + 1;

      while (next < options.length && options[next]?.disabled) {
        next++;
      }

      if (next < options.length) {
        setActiveIndex(next);
      }

      return;
    }

    /* ======================================
       UP
    ====================================== */

    if (event.key === "ArrowUp") {
      event.preventDefault();

      let previous = activeIndex - 1;

      while (previous >= 0 && options[previous]?.disabled) {
        previous--;
      }

      if (previous >= 0) {
        setActiveIndex(previous);
      }

      return;
    }

    /* ======================================
       ENTER
    ====================================== */

    if (event.key !== "Enter" || activeIndex < 0) {
      return;
    }

    event.preventDefault();

    const option = options[activeIndex];

    if (option && !option.disabled) {
      onChange?.(option.value);
    }
  }

  /* ======================================
     CLASSES
  ====================================== */

  const classes = ["option-list", className].filter(Boolean).join(" ");

  /* ======================================
     EMPTY
  ====================================== */

  if (!options.length) {
    return (
      <div
        className="
          option-list__empty
        "
      >
        No results found
      </div>
    );
  }

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div
      ref={listRef}

      role="listbox"

      tabIndex={0}

      aria-disabled={disabled}

      data-embedded={embedded}

      className={classes}

      onKeyDown={handleKeyDown}

      {...rest}
    >
      {options.map((option, index) => {
        const selected = option.value === value;

        const active = index === activeIndex;

        if (renderOption) {
          return (
            <div key={option.value}>
              {renderOption(option, {
                selected,

                active,

                disabled: option.disabled,

                onMouseEnter: () => setActiveIndex(index),

                onClick: () => {
                  if (disabled || option.disabled) {
                    return;
                  }

                  setActiveIndex(index);

                  onChange?.(option.value);
                },
              })}
            </div>
          );
        }

        return (
          <OptionItem
            key={option.value}

            selected={selected}

            active={active}

            disabled={option.disabled}

            onMouseEnter={() => setActiveIndex(index)}

            onClick={() => {
              if (disabled || option.disabled) {
                return;
              }

              setActiveIndex(index);

              onChange?.(option.value);
            }}
          >
            {option.label}
          </OptionItem>
        );
      })}
    </div>
  );
}

/* ======================================
   OPTION LIST
====================================== */

export const OptionList = OptionListBase;
