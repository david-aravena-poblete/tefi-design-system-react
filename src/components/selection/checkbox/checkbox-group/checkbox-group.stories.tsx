/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";

import { Checkbox } from "../checkbox/Checkbox";

import { CheckboxGroup } from "./CheckboxGroup";

/* ======================================
     META
  ====================================== */

export default {
  title: "Components/Selection/Checkbox/CheckboxGroup",

  component: CheckboxGroup,
};

/* ======================================
     PLAYGROUND
  ====================================== */

export function Playground() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <CheckboxGroup value={value} onChange={setValue}>
      <Checkbox value="react">React</Checkbox>

      <Checkbox value="vue">Vue</Checkbox>

      <Checkbox value="svelte">Svelte</Checkbox>
    </CheckboxGroup>
  );
}

/* ======================================
     ROW
  ====================================== */

export function Row() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <CheckboxGroup
      value={value}
      onChange={setValue}

      direction="row"
    >
      <Checkbox value="react">React</Checkbox>

      <Checkbox value="vue">Vue</Checkbox>

      <Checkbox value="svelte">Svelte</Checkbox>
    </CheckboxGroup>
  );
}

/* ======================================
     DEFAULT VALUES
  ====================================== */

export function DefaultValues() {
  const [value, setValue] = useState<string[]>(["react", "svelte"]);

  return (
    <CheckboxGroup value={value} onChange={setValue}>
      <Checkbox value="react">React</Checkbox>

      <Checkbox value="vue">Vue</Checkbox>

      <Checkbox value="svelte">Svelte</Checkbox>
    </CheckboxGroup>
  );
}

/* ======================================
     DISABLED
  ====================================== */

export function Disabled() {
  return (
    <CheckboxGroup disabled>
      <Checkbox value="react">React</Checkbox>

      <Checkbox value="vue">Vue</Checkbox>

      <Checkbox value="svelte">Svelte</Checkbox>
    </CheckboxGroup>
  );
}

/* ======================================
     GAP
  ====================================== */

export function GapLarge() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <CheckboxGroup
      value={value}
      onChange={setValue}

      gap="lg"
    >
      <Checkbox value="react">React</Checkbox>

      <Checkbox value="vue">Vue</Checkbox>

      <Checkbox value="svelte">Svelte</Checkbox>
    </CheckboxGroup>
  );
}
