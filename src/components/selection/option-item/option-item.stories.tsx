/* ======================================
   IMPORTS
====================================== */

import { OptionItem } from "@/components/selection/";

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
      <OptionItem>React</OptionItem>
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
      <OptionItem active>React</OptionItem>
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
      <OptionItem selected>React</OptionItem>
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
      <OptionItem disabled>React</OptionItem>
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
      <OptionItem>Default</OptionItem>

      <OptionItem active>Active</OptionItem>

      <OptionItem selected>Selected</OptionItem>

      <OptionItem disabled>Disabled</OptionItem>
    </div>
  );
}
