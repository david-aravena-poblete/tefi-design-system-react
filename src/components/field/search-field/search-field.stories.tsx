/* ======================================
   IMPORTS
====================================== */

import React, { useState } from "react";
import { SearchField } from "./SearchField";
import { FormField } from "../../form/form-field";
import { Label } from "../label";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Field/SearchField",

  component: SearchField,
};


/* ======================================
   DEFAULT
====================================== */

export function Default() {

  const [value, setValue] =
    useState("");

  return (
    <FormField>

      <Label>
        Search
      </Label>

      <SearchField
        value={value}

        onChange={(event) =>
          setValue(
            event.target.value
          )
        }

        placeholder="Search products..."
      />

    </FormField>
  );
}


/* ======================================
   SIZES
====================================== */

export function Sizes() {

  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",

        gap: "16px",
      }}
    >

      <SearchField
        inputSize="sm"

        placeholder="Small"
      />

      <SearchField
        inputSize="md"

        placeholder="Medium"
      />

      <SearchField
        inputSize="lg"

        placeholder="Large"
      />

    </div>
  );
}


/* ======================================
   DISABLED
====================================== */

export function Disabled() {

  return (
    <SearchField
      disabled

      value="Search disabled"
    />
  );
}


/* ======================================
   WITHOUT CLEAR
====================================== */

export function WithoutClear() {

  return (
    <SearchField
      clearable={false}

      placeholder="Search without clear"
    />
  );
}