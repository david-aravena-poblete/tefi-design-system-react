/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";

import { Radio } from "./Radio";

import { RadioGroup } from "../radio-group/RadioGroup";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Selection/Radio/Radio",

  component: Radio,

  args: {
    children: "Option",
  },

  argTypes: {
    size: {
      control: "select",

      options: ["sm", "md", "lg"],
    },
  },
};

/* ======================================
   PLAYGROUND
====================================== */

export const Playground = {};

/* ======================================
   SIZES
====================================== */

export const Sizes = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Radio size="sm">
        Small
      </Radio>

      <Radio size="md">
        Medium
      </Radio>

      <Radio size="lg">
        Large
      </Radio>
    </div>
  ),
};

/* ======================================
   DISABLED
====================================== */

export const Disabled = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Radio disabled>
        Disabled
      </Radio>

      <Radio
        disabled
        defaultChecked
      >
        Disabled Checked
      </Radio>
    </div>
  ),
};

/* ======================================
   RADIO GROUP
====================================== */

export function Group() {
  const [value, setValue] = useState("react");

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