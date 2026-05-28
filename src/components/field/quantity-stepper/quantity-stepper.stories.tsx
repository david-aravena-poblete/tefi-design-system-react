/* ======================================
   IMPORTS
====================================== */

import React from "react";

import { QuantityStepper } from "./QuantityStepper";
import { FormField } from "../../form/form-field";
import { Label } from "../label";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Field/QuantityStepper",

  component: QuantityStepper,
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

      <QuantityStepper />

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

        alignItems: "center",

        gap: "16px",
      }}
    >

      <QuantityStepper
        size="sm"
      />

      <QuantityStepper
        size="md"
      />

      <QuantityStepper
        size="lg"
      />

    </div>
  );
}


/* ======================================
   DISABLED
====================================== */

export function Disabled() {

  return (
    <QuantityStepper
      disabled
    />
  );
}


/* ======================================
   LIMITS
====================================== */

export function Limits() {

  return (
    <QuantityStepper
      min={1}

      max={5}

      defaultValue={5}
    />
  );
}