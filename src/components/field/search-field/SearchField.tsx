/* ======================================
   IMPORTS
====================================== */

import { Search, X } from "lucide-react";
import "./search-field.css";
import { Input } from "@/components/field";
import type { SearchFieldProps } from "./search-field.types";

/* ======================================
   SEARCH FIELD
====================================== */

export function SearchField({
  clearable = true,

  value,

  onChange,

  onClear,

  ...rest
}: SearchFieldProps) {

  /* ======================================
     CLEAR
  ====================================== */

  const hasValue =
    value !== undefined &&
    value !== "";

  function handleClear() {

    onClear?.();

    onChange?.({
      target: {
        value: "",
      },
    } as React.ChangeEvent<HTMLInputElement>);
  }

  /* ======================================
     RENDER
  ====================================== */

  return (
    <Input
      type="text"

      value={value}

      onChange={onChange}

      startIcon={
        <Search size={16} />
      }

      endIcon={

        clearable &&
        hasValue ? (

          <button
            type="button"

            className="search-field__clear"

            onClick={handleClear}

            aria-label="
              Clear search
            "
          >
            <X size={16} />
          </button>

        ) : undefined
      }

      {...rest}
    />
  );
}