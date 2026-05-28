/* ======================================
   IMPORTS
====================================== */
import React from "react";

import { useState } from "react";
import { Switch } from "./Switch";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Selection/Switch",

  component: Switch,

  args: {
    children: "Enable notifications",
  },

  argTypes: {
    state: {
      control: "select",

      options: [
        "default",
        "error",
        "success",
        "warning",
      ],
    },

    size: {
      control: "select",

      options: [
        "sm",
        "md",
        "lg",
      ],
    },
  },
};


/* ======================================
   PLAYGROUND
====================================== */

export function Playground() {

  const [checked, setChecked] =
    useState(false);

  return (
    <Switch
      checked={checked}

      onChange={(event) =>
        setChecked(
          event.target.checked
        )
      }
    />
  );
}


/* ======================================
   WITH LABEL
====================================== */

export function WithLabel() {

  const [checked, setChecked] =
    useState(true);

  return (
    <Switch
      checked={checked}

      onChange={(event) =>
        setChecked(
          event.target.checked
        )
      }
    >
      Enable notifications
    </Switch>
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

      <Switch>
        Default
      </Switch>

      <Switch state="error">
        Error
      </Switch>

      <Switch state="success">
        Success
      </Switch>

      <Switch state="warning">
        Warning
      </Switch>

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

      <Switch size="sm">
        Small
      </Switch>

      <Switch size="md">
        Medium
      </Switch>

      <Switch size="lg">
        Large
      </Switch>

    </div>
  );
}


/* ======================================
   DISABLED
====================================== */

export function Disabled() {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >

      <Switch disabled>
        Disabled
      </Switch>

      <Switch
        disabled

        defaultChecked
      >
        Disabled checked
      </Switch>

    </div>
  );
}