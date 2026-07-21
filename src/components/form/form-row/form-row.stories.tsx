/* ======================================
   IMPORTS
====================================== */

import { FormRow } from "@/components/form/form-row";
import { FormField } from "@/components/form/form-field";

import { Label } from "@/components/field/label";

import { Input } from "@/components/input";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Form/FormRow",

  component: FormRow,
};

/* ======================================
   DEFAULT
====================================== */

export function Default() {
  return (
    <FormRow>
      <FormField>
        <Label>First name</Label>

        <Input placeholder="John" />
      </FormField>

      <FormField>
        <Label>Last name</Label>

        <Input placeholder="Doe" />
      </FormField>
    </FormRow>
  );
}

/* ======================================
   THREE COLUMNS
====================================== */

export function ThreeColumns() {
  return (
    <FormRow>
      <FormField>
        <Label>City</Label>

        <Input placeholder="Santiago" />
      </FormField>

      <FormField>
        <Label>Region</Label>

        <Input placeholder="RM" />
      </FormField>

      <FormField>
        <Label>Country</Label>

        <Input placeholder="Chile" />
      </FormField>
    </FormRow>
  );
}
