/* ======================================
   IMPORTS
====================================== */

import { FormSection } from "@/components/form/form-section";

import { FormRow } from "@/components/form/form-row";
import { FormField } from "@/components/form/form-field";

import { Label } from "@/components/field/label";

import { Input } from "@/components/input";

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