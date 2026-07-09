/* ======================================
   IMPORTS
====================================== */

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./combobox.css";
import { Chip } from "@/components/chip";
import { SearchField } from "@/components/field";
import { OptionList } from "@/components/selection";
import { FloatingSurface } from "@/components/overlay";
import type { ComboboxProps } from "./combobox.types";

/* ======================================
   COMBOBOX
====================================== */

export function Combobox({
  options = [],

  value,

  defaultValue,

  placeholder = "Search...",

  variant = "multiple",

  inputSize = "md",

  state = "default",

  disabled = false,

  clearable = true,

  onChange,

  className = "",

  ...rest
}: ComboboxProps) {

  /* ======================================
     VARIANT
  ====================================== */

  const isMultiple =
    variant === "multiple";

  /* ======================================
     CONTROLLED
  ====================================== */

  const isControlled =
    value !== undefined;

  /* ======================================
     INTERNAL VALUE
  ====================================== */

  const [internalValue, setInternalValue] =
    useState(
      defaultValue ??
      (
        isMultiple
          ? []
          : ""
      )
    );

  const currentValue =
    isControlled
      ? value
      : internalValue;

  /* ======================================
     QUERY
  ====================================== */

  const [query, setQuery] =
    useState("");

  /* ======================================
     OPEN
  ====================================== */

  const [open, setOpen] =
    useState(false);

  /* ======================================
     CONTAINER
  ====================================== */

  const containerRef =
    useRef<HTMLDivElement>(null);

  /* ======================================
     CLICK OUTSIDE
  ====================================== */

  useEffect(() => {

    function handleClickOutside(
      event: MouseEvent
    ) {

      if (
        containerRef.current &&
        !containerRef.current.contains(
          event.target as Node
        )
      ) {

        setOpen(false);

        setQuery("");
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  /* ======================================
     FILTERED OPTIONS
  ====================================== */

  const filteredOptions =
    useMemo(() => {

      const normalizedQuery =
        query.toLowerCase();

      return options
        .filter((option) => {

          return option.label
            .toLowerCase()
            .startsWith(
              normalizedQuery
            );
        })
        .filter((option) => {

          if (!isMultiple) {
            return true;
          }

          return !(
            currentValue as string[]
          ).includes(
            option.value
          );
        });

    }, [
      options,
      query,
      currentValue,
      isMultiple,
    ]);

  /* ======================================
     SELECT
  ====================================== */

  function handleSelect(
    optionValue: string
  ) {

    if (disabled) {
      return;
    }

    const selectedOption =
      options.find(
        (option) =>
          option.value ===
          optionValue
      );

    if (!selectedOption) {
      return;
    }

    /* ======================================
       MULTIPLE
    ====================================== */

    if (isMultiple) {

      const nextValue = [
        ...(currentValue as string[]),
        optionValue,
      ];

      if (!isControlled) {

        setInternalValue(
          nextValue
        );
      }

      onChange?.(
        nextValue
      );

      setQuery("");

      return;
    }

    /* ======================================
       SINGLE
    ====================================== */

    if (!isControlled) {

      setInternalValue(
        optionValue
      );
    }

    onChange?.(
      optionValue
    );

    setQuery("");

    setOpen(false);
  }

  /* ======================================
     REMOVE
  ====================================== */

  function handleRemove(
    optionValue: string
  ) {

    if (
      !isMultiple ||
      disabled
    ) {
      return;
    }

    const nextValue =
      (
        currentValue as string[]
      ).filter(
        (item) =>
          item !== optionValue
      );

    if (!isControlled) {

      setInternalValue(
        nextValue
      );
    }

    onChange?.(
      nextValue
    );
  }

  /* ======================================
     SELECTED OPTIONS
  ====================================== */

  const selectedOptions =
    options.filter((option) => {

      if (isMultiple) {

        return (
          currentValue as string[]
        ).includes(
          option.value
        );
      }

      return (
        currentValue ===
        option.value
      );
    });

  /* ======================================
     INPUT VALUE
  ====================================== */

  const inputValue =
    query ||
    (
      !isMultiple
        ? selectedOptions[0]?.label
        : ""
    ) ||
    "";

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "combobox",

    `combobox--${inputSize}`,

    `combobox--${state}`,

    disabled &&
      "combobox--disabled",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div
      ref={containerRef}

      className={classes}

      {...rest}
    >

      {/* ======================================
          CHIPS
      ====================================== */}

      {isMultiple &&
        selectedOptions.length > 0 && (

          <div className="combobox__chips">

            {selectedOptions.map(
              (option) => (

                <Chip
                  key={option.value}

                  size={inputSize}

                  removable

                  disabled={disabled}

                  onRemove={() =>
                    handleRemove(
                      option.value
                    )
                  }
                >
                  {option.label}
                  </Chip>
                )
              )}
          </div>
        )}

      {/* ======================================
          INPUT
      ====================================== */}

      <SearchField
        value={
          open
            ? query
            : inputValue
        }

        placeholder={placeholder}

        inputSize={inputSize}

        state={state}

        disabled={disabled}

        clearable={clearable}

        onFocus={() => {

          if (disabled) {
            return;
          }

          setOpen(true);
        }}

        onChange={(event) => {

          setQuery(
            event.target.value
          );

          setOpen(true);
        }}

        onClear={() => {

          setQuery("");

          if (!isMultiple) {

            if (!isControlled) {

              setInternalValue("");
            }

            onChange?.("");
          }
        }}
      />

      {/* ======================================
          OPTIONS
      ====================================== */}

      <FloatingSurface
        open={open}
      >

        {filteredOptions.length > 0 ? (

          <OptionList
            embedded

            options={
              filteredOptions
            }

            onChange={
              handleSelect
            }
          />

        ) : (

          <div className="combobox__empty">
            No results found
          </div>

        )}

      </FloatingSurface>

    </div>
  );
}

export default Combobox;