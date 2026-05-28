/* ======================================
   IMPORTS
====================================== */

import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./option-list.css";

import {
  OptionItem,
} from "../option-item";

import type {
  OptionListProps,
} from "./option-list.types";

/* ======================================
   OPTION LIST
====================================== */

export function OptionList({
  options = [],

  value = null,

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

  const [activeIndex, setActiveIndex] =
    useState(-1);

  const listRef =
    useRef<HTMLDivElement>(null);

  /* ======================================
     SYNC ACTIVE
  ====================================== */

  useEffect(() => {

    const index =
      options.findIndex(
        (option) =>
          option.value === value
      );

    if (index >= 0) {
      setActiveIndex(index);
    }

  }, [value, options]);

  /* ======================================
     SCROLL ACTIVE
  ====================================== */

  useEffect(() => {

    if (activeIndex < 0) {
      return;
    }

    const list =
      listRef.current;

    const item =
      list?.children[
        activeIndex
      ] as HTMLElement;

    item?.scrollIntoView({
      block: "nearest",
    });

  }, [activeIndex]);

  /* ======================================
     KEYBOARD
  ====================================== */

  function handleKeyDown(
    event:
      React.KeyboardEvent<HTMLDivElement>
  ) {

    if (disabled) {
      return;
    }

    /* ======================================
       DOWN
    ====================================== */

    if (
      event.key === "ArrowDown"
    ) {

      event.preventDefault();

      let next =
        activeIndex + 1;

      while (
        next < options.length
      ) {

        if (
          !options[next]
            ?.disabled
        ) {
          break;
        }

        next++;
      }

      if (
        next < options.length
      ) {
        setActiveIndex(next);
      }
    }

    /* ======================================
       UP
    ====================================== */

    if (
      event.key === "ArrowUp"
    ) {

      event.preventDefault();

      let previous =
        activeIndex - 1;

      while (
        previous >= 0
      ) {

        if (
          !options[previous]
            ?.disabled
        ) {
          break;
        }

        previous--;
      }

      if (
        previous >= 0
      ) {
        setActiveIndex(previous);
      }
    }

    /* ======================================
       ENTER
    ====================================== */

    if (
      event.key === "Enter" &&
      activeIndex >= 0
    ) {

      event.preventDefault();

      const option =
        options[activeIndex];

      if (
        option &&
        !option.disabled
      ) {
        onChange?.(
          option.value
        );
      }
    }

    /* ======================================
       ESCAPE
    ====================================== */

    if (
      event.key === "Escape"
    ) {

      (
        event.currentTarget as
        HTMLDivElement
      ).blur();
    }
  }

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "option-list",

    embedded &&
      "option-list--embedded",

    disabled &&
      "option-list--disabled",

    className,
  ]
    .filter(Boolean)
    .join(" ");

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

      className={classes}

      onKeyDown={
        handleKeyDown
      }

      {...rest}
    >

      {options.map(
        (
          option,
          index
        ) => {

          const selected =
            option.value ===
            value;

          const active =
            index ===
            activeIndex;

          const optionProps = {
            label:
              option.label,

            selected,

            active,

            disabled:
              option.disabled,

            onMouseEnter:
              () =>
                setActiveIndex(
                  index
                ),

            onClick:
              () => {

                if (
                  disabled ||
                  option.disabled
                ) {
                  return;
                }

                setActiveIndex(
                  index
                );

                onChange?.(
                  option.value
                );
              },
          };

          if (
            renderOption
          ) {

            return (
              <div
                key={
                  option.value
                }
              >
                {renderOption(
                  option,
                  optionProps
                )}
              </div>
            );
          }

          return (
            <OptionItem
              key={
                option.value
              }

              {...optionProps}
            />
          );
        }
      )}

    </div>
  );
}