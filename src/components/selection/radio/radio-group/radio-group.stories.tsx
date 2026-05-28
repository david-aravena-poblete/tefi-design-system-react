/* ======================================
   IMPORTS
====================================== */

import React, {
    useState,
  } from "react";
  
  import { Radio }
    from "../radio/Radio";
  
  import { RadioGroup }
    from "./RadioGroup";
  
  /* ======================================
     META
  ====================================== */
  
  export default {
    title: "Components/Selection/Radio/RadioGroup",
  
    component: RadioGroup,
  };
  
  
  /* ======================================
     PLAYGROUND
  ====================================== */
  
  export function Playground() {
  
    const [value, setValue] =
      useState("react");
  
    return (
      <RadioGroup
        value={value}
        onChange={setValue}
      >
        <Radio value="react">
          React
        </Radio>
  
        <Radio value="vue">
          Vue
        </Radio>
  
        <Radio value="svelte">
          Svelte
        </Radio>
      </RadioGroup>
    );
  }
  
  
  /* ======================================
     ROW
  ====================================== */
  
  export function Row() {
  
    const [value, setValue] =
      useState("react");
  
    return (
      <RadioGroup
        value={value}
        onChange={setValue}
  
        direction="row"
      >
        <Radio value="react">
          React
        </Radio>
  
        <Radio value="vue">
          Vue
        </Radio>
  
        <Radio value="svelte">
          Svelte
        </Radio>
      </RadioGroup>
    );
  }
  
  
  /* ======================================
     STATES
  ====================================== */
  
  export function States() {
  
    const [value, setValue] =
      useState("default");
  
    return (
      <RadioGroup
        value={value}
        onChange={setValue}
      >
        <Radio
          value="default"
        >
          Default
        </Radio>
  
        <Radio
          value="error"
          state="error"
        >
          Error
        </Radio>
  
        <Radio
          value="success"
          state="success"
        >
          Success
        </Radio>
  
        <Radio
          value="warning"
          state="warning"
        >
          Warning
        </Radio>
      </RadioGroup>
    );
  }
  
  
  /* ======================================
     DISABLED
  ====================================== */
  
  export function Disabled() {
  
    return (
      <RadioGroup disabled>
        <Radio value="react">
          React
        </Radio>
  
        <Radio value="vue">
          Vue
        </Radio>
  
        <Radio value="svelte">
          Svelte
        </Radio>
      </RadioGroup>
    );
  }
  
  
  /* ======================================
     GAP
  ====================================== */
  
  export function GapLarge() {
  
    const [value, setValue] =
      useState("react");
  
    return (
      <RadioGroup
        value={value}
        onChange={setValue}
  
        gap="lg"
      >
        <Radio value="react">
          React
        </Radio>
  
        <Radio value="vue">
          Vue
        </Radio>
  
        <Radio value="svelte">
          Svelte
        </Radio>
      </RadioGroup>
    );
  }