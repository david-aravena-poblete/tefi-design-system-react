/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Dots } from "./Dots";

/* ======================================
   META
====================================== */

const meta = {
  title: "Components/Dots",
  component: Dots,

  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dots>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   STORIES
====================================== */

export const Default: Story = {
  args: {
    count: 4,
    active: 0,
    onChange: () => {},
  },

  render: (args) => {
    const [active, setActive] = useState(args.active);

    return (
      <Dots
        {...args}
        active={active}
        onChange={setActive}
      />
    );
  },
};