/* ======================================
   IMPORTS
====================================== */

import React, { useState } from "react";

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
    state: {
      control: "select",

      options: ["default", "error", "success", "warning"],
    },

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
   CHECKED
====================================== */

export const Checked = {
  args: {
    defaultChecked: true,
  },
};

/* ======================================
   STATES
====================================== */

export const Error = {
  args: {
    state: "error",

    defaultChecked: true,
  },
};

export const Success = {
  args: {
    state: "success",

    defaultChecked: true,
  },
};

export const Warning = {
  args: {
    state: "warning",

    defaultChecked: true,
  },
};

/* ======================================
   SIZES
====================================== */

export const Small = {
  args: {
    size: "sm",
  },
};

export const Medium = {
  args: {
    size: "md",
  },
};

export const Large = {
  args: {
    size: "lg",
  },
};

/* ======================================
   DISABLED
====================================== */

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked = {
  args: {
    disabled: true,

    defaultChecked: true,
  },
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
      <Radio value="react">React</Radio>

      <Radio value="vue">Vue</Radio>

      <Radio value="svelte">Svelte</Radio>
    </RadioGroup>
  );
}
