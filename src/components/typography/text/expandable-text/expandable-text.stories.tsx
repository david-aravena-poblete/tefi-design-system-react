/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { ExpandableText } from "./ExpandableText";

/* ======================================
     CONSTANTS
  ====================================== */

const text = `
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur.
  `;

/* ======================================
     META
  ====================================== */

const meta = {
  title: "Components/ExpandableText",

  component: ExpandableText,

  args: {
    children: text,

    lines: 4,

    expandLabel: "Ver más",

    collapseLabel: "Ver menos",
  },

  argTypes: {
    lines: {
      control: "number",
    },

    expandLabel: {
      control: "text",
    },

    collapseLabel: {
      control: "text",
    },

    skeleton: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof ExpandableText>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
     PLAYGROUND
  ====================================== */

export const Playground: Story = {};

/* ======================================
     LINES
  ====================================== */

export const Lines: Story = {
  args: {
    lines: 2,
  },
};

/* ======================================
     CUSTOM LABELS
  ====================================== */

export const CustomLabels: Story = {
  args: {
    expandLabel: "Mostrar más",

    collapseLabel: "Mostrar menos",
  },
};

/* ======================================
     SKELETON
  ====================================== */

export const Skeleton: Story = {
  args: {
    skeleton: true,
  },
};
