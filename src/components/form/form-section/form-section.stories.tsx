/* ======================================
   IMPORTS
====================================== */

import React from "react";

import { FormSection }
  from "./FormSection";

import { FormRow }
  from "../form-row";

import { FormField }
  from "../form-field";

import { Label }
  from "../../field/label";

import { Input }
  from "../../field/input";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Form/FormSection",

  component: FormSection,
};


/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (
    <FormSection
      title="Personal information"

      description="
        Fill in your basic profile data.
      "
    >

      <FormRow>

        <FormField>

          <Label>
            First name
          </Label>

          <Input
            placeholder="John"
          />

        </FormField>

        <FormField>

          <Label>
            Last name
          </Label>

          <Input
            placeholder="Doe"
          />

        </FormField>

      </FormRow>

    </FormSection>
  );
}


/* ======================================
   MULTIPLE FIELDS
====================================== */

export function MultipleFields() {

  return (
    <FormSection
      title="Account settings"

      description="
        Configure your account details.
      "
    >

      <FormField>

        <Label>
          Email
        </Label>

        <Input
          placeholder="john@example.com"
        />

      </FormField>

      <FormField>

        <Label>
          Password
        </Label>

        <Input
          type="password"

          placeholder="••••••••"
        />

      </FormField>

    </FormSection>
  );
}