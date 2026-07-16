/* ======================================
   IMPORTS
====================================== */

import {
  Search,
  X,
} from "lucide-react";

import "./search-field.css";

import {
  Input,
} from "@/components/input";

import type {
  SearchFieldProps,
} from "./search-field.types";

/* ======================================
   SEARCH FIELD
====================================== */

export function SearchField({

  /* ======================================
     TEFI PROPS
  ====================================== */

  clearable = true,

  onClear,

  /* ======================================
     REACT PROPS
  ====================================== */

  value,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest

}: SearchFieldProps) {

  /* ======================================
     DERIVED
  ====================================== */

  const hasValue =
    value !== undefined &&
    value !== "";

  /* ======================================
     RENDER
  ====================================== */

  return (

    <Input
      type="text"
      value={value}
      startIcon={
        <Search size={16} />
      }
      endIcon={
        clearable &&
        hasValue ? (

          <button
            type="button"
            className="search-field__clear"
            onClick={onClear}
            aria-label="Clear search"
          >

            <X size={16} />

          </button>

        ) : undefined
      }
      {...rest}
    />

  );

}