/* ======================================
   IMPORTS
====================================== */

import React from "react";

import { PasswordField } from "./PasswordField";
import { FormField } from "../../form/form-field";
import { Label } from "../label";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Field/PasswordField",

  component: PasswordField,
};


/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (
    <FormField>

      <Label>
        Password
      </Label>

      <PasswordField
        placeholder="••••••••"
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

        <PasswordField
          placeholder="Default state"
        />

      </FormField>

      <FormField>

        <Label>
          Error
        </Label>

        <PasswordField
          state="error"

          placeholder="Error state"
        />

      </FormField>

      <FormField>

        <Label>
          Success
        </Label>

        <PasswordField
          state="success"

          placeholder="Success state"
        />

      </FormField>

      <FormField>

        <Label>
          Disabled
        </Label>

        <PasswordField
          disabled

          placeholder="Disabled state"
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

      <PasswordField
        inputSize="sm"

        placeholder="Small"
      />

      <PasswordField
        inputSize="md"

        placeholder="Medium"
      />

      <PasswordField
        inputSize="lg"

        placeholder="Large"
      />

    </div>
  );
}