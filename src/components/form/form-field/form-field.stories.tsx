/* ======================================
   IMPORTS
====================================== */

import { FormField } from "@/components/form/form-field";

import { Label } from "@/components/field/label";
import { HelperText } from "@/components/field/helper-text";
import { ErrorMessage } from "@/components/field/error-message";

import { Input } from "@/components/input";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Form/FormField",

  component: FormField,
};

/* ======================================
   DEFAULT
====================================== */

export function Default() {
  return (
    <FormField>
      <Label>Email</Label>

      <Input placeholder="Enter your email" />

      <HelperText>We never share your email.</HelperText>
    </FormField>
  );
}

/* ======================================
   ERROR
====================================== */

export function Error() {
  return (
    <FormField state="error">
      <Label>Email</Label>

      <Input placeholder="Enter your email" />

      <ErrorMessage>Invalid email address.</ErrorMessage>
    </FormField>
  );
}

/* ======================================
   DISABLED
====================================== */

export function Disabled() {
  return (
    <FormField disabled>
      <Label>Email</Label>

      <Input placeholder="Enter your email" />

      <HelperText>Disabled field example.</HelperText>
    </FormField>
  );
}
