/* ======================================
   IMPORTS
====================================== */

import React from "react";

import {
  OptionList,
} from "./OptionList";

/* ======================================
   OPTIONS
====================================== */

const OPTIONS = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Vue",
    value: "vue",
  },
  {
    label: "Angular",
    value: "angular",
  },
  {
    label: "Svelte",
    value: "svelte",
    disabled: true,
  },
];

/* ======================================
   META
====================================== */

export default {
  title: "Components/Selection/OptionList",

  component: OptionList,
};


/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (
    <div
      style={{
        width: "280px",
      }}
    >

      <OptionList
        options={OPTIONS}
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
        width: "280px",
      }}
    >

      <OptionList
        options={OPTIONS}

        value="vue"
      />

    </div>
  );
}


/* ======================================
   INTERACTIVE
====================================== */

export function Interactive() {

  const [value, setValue] =
    React.useState(
      "react"
    );

  return (
    <div
      style={{
        width: "280px",
      }}
    >

      <OptionList
        options={OPTIONS}

        value={value}

        onChange={setValue}
      />

    </div>
  );
}


/* ======================================
   EMPTY
====================================== */

export function Empty() {

  return (
    <div
      style={{
        width: "280px",
      }}
    >

      <OptionList
        options={[]}
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
        width: "280px",
      }}
    >

      <OptionList
        options={OPTIONS}

        disabled
      />

    </div>
  );
}