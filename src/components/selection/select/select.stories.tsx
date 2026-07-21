/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "./Select";

/* ======================================
   OPTIONS
====================================== */

const OPTIONS = [
  {
    label: "Apple",
    value: "apple",
  },

  {
    label: "Banana",
    value: "banana",
  },

  {
    label: "Orange",
    value: "orange",
  },
];

/* ======================================
   META
====================================== */

const meta: Meta<typeof Select> = {
  title: "Components/Selection/Select",

  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

/* ======================================
   STORIES
====================================== */

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);

    return (
      <Select
        options={OPTIONS}

        value={value}

        placeholder="Selecciona una fruta"

        onChange={setValue}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    options: OPTIONS,

    value: "orange",

    disabled: true,
  },
};
