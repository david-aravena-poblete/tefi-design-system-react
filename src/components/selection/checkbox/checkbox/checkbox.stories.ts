/* ======================================
   IMPORTS
====================================== */

import { Checkbox } from "./Checkbox";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Selection/Checkbox/Checkbox",

  component: Checkbox,

  args: {
    children: "Accept terms",
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
   DEFAULT
====================================== */

export const Default = {};

/* ======================================
   CHECKED
====================================== */

export const Checked = {
  args: {
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