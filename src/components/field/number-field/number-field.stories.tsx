/* ======================================
   IMPORTS
====================================== */

import React from "react";

import { NumberField } from "./NumberField";
import { FormField } from "../../form/form-field";
import { Label } from "../label";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Field/NumberField",

  component: NumberField,
};


/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (
    <FormField>

      <Label>
        Quantity
      </Label>

      <NumberField
        placeholder="0"
      />

    </FormField>
  );
}


/* ======================================
   STATES
====================================== */

export function States() {

  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",

        gap: "16px",
      }}
    >

      <FormField>

        <Label>
          Default
        </Label>

        <NumberField
          placeholder="100"
        />

      </FormField>

      <FormField>

        <Label>
          Error
        </Label>

        <NumberField
          state="error"

          placeholder="100"
        />

      </FormField>

      <FormField>

        <Label>
          Success
        </Label>

        <NumberField
          state="success"

          placeholder="100"
        />

      </FormField>

      <FormField>

        <Label>
          Disabled
        </Label>

        <NumberField
          disabled

          placeholder="100"
        />

      </FormField>

    </div>
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

      <NumberField
        inputSize="sm"

        placeholder="Small"
      />

      <NumberField
        inputSize="md"

        placeholder="Medium"
      />

      <NumberField
        inputSize="lg"

        placeholder="Large"
      />

    </div>
  );
}


/* ======================================
   WITH LIMITS
====================================== */

export function WithLimits() {

  return (
    <FormField>

      <Label>
        Age
      </Label>

      <NumberField
        min={18}

        max={99}

        placeholder="18"
      />

    </FormField>
  );
}