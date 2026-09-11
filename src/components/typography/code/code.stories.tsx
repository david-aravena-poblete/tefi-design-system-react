/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "./Code";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Typography/Code",

  component: Code,

  args: {
    children: "utils/validate.js",
  },
} satisfies Meta<typeof Code>;

type Story = StoryObj<typeof Code>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {};

/* ======================================
   COMMAND
====================================== */

export const Command: Story = {
  args: {
    children: "npm install @tefi/design-system",
  },
};

/* ======================================
   FILE
====================================== */

export const File: Story = {
  args: {
    children: "src/components/Button.tsx",
  },
};