/* ======================================
   IMPORTS
====================================== */

import React from "react";

import { OptionItem }
  from "./OptionItem";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Selection/OptionItem",

  component: OptionItem,
};


/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (
    <div
      style={{
        width: "240px",
      }}
    >

      <OptionItem
        label="React"
      />

    </div>
  );
}


/* ======================================
   ACTIVE
====================================== */

export function Active() {

  return (
    <div
      style={{
        width: "240px",
      }}
    >

      <OptionItem
        label="React"

        active
      />

    </div>
  );
}


/* ======================================
   SELECTED
====================================== */

export function Selected() {

  return (
    <div
      style={{
        width: "240px",
      }}
    >

      <OptionItem
        label="React"

        selected
      />

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
        width: "240px",
      }}
    >

      <OptionItem
        label="React"

        disabled
      />

    </div>
  );
}


/* ======================================
   STATES
====================================== */

export function States() {

  return (
    <div
      style={{
        width: "240px",

        display: "flex",

        flexDirection: "column",
      }}
    >

      <OptionItem
        label="Default"
      />

      <OptionItem
        label="Active"

        active
      />

      <OptionItem
        label="Selected"

        selected
      />

      <OptionItem
        label="Disabled"

        disabled
      />

    </div>
  );
}