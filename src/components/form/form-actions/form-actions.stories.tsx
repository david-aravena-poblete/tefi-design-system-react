/* ======================================
   IMPORTS
====================================== */

import React from "react";
import { FormActions } from "./FormActions";
import { Button } from "../../button";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Form/FormActions",

  component: FormActions,
};


/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (
    <FormActions>

      <Button size="sm">
        Cancel
      </Button>

      <Button size="sm">
        Save
      </Button>

    </FormActions>
  );
}


/* ======================================
   WITH PRIMARY ACTION
====================================== */

export function WithPrimaryAction() {

  return (
    <FormActions>

      <Button
        variant="ghost"

        size="sm"
      >
        Back
      </Button>

      <Button size="sm">
        Continue
      </Button>

    </FormActions>
  );
}