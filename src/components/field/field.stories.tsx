/* ======================================
   IMPORTS
====================================== */

import React from "react";

import { Field } from "./Field";
import { Input } from "./input";

/* ======================================
   META
====================================== */

export default {

  title: "Components/Field",

  component: Field,

};


/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (

    <Field>

      <Field.Label>

        Name

      </Field.Label>

      <Input
        placeholder="Enter your name"
      />

      <Field.HelperText>

        This field is required.

      </Field.HelperText>

    </Field>

  );

}


/* ======================================
   ERROR
====================================== */

export function Error() {

  return (

    <Field>

      <Field.Label>

        Email

      </Field.Label>

      <Input
        placeholder="Enter your email"
      />

      <Field.ErrorMessage>

        Invalid email address.

      </Field.ErrorMessage>

    </Field>

  );

}


/* ======================================
   HELPER + ERROR
====================================== */

export function HelperAndError() {

  return (

    <Field>

      <Field.Label>

        Password

      </Field.Label>

      <Input
        type="password"
        placeholder="Enter your password"
      />

      <Field.HelperText>

        Minimum 8 characters.

      </Field.HelperText>

      <Field.ErrorMessage>

        Password is too short.

      </Field.ErrorMessage>

    </Field>

  );

}


/* ======================================
   WITHOUT LABEL
====================================== */

export function WithoutLabel() {

  return (

    <Field>

      <Input
        placeholder="Search..."
      />

    </Field>

  );

}