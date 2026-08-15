/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Stack } from "./Stack";

/* ======================================
   META
====================================== */

const meta = {
  title: "Layouts/Stack",

  component: Stack,

  tags: ["autodocs"],

  argTypes: {
    gap: {
      control: "select",

      options: ["none", "xs", "sm", "md", "lg", "xl", "xxl", "xxxl"],
    },

    children: {
      table: {
        disable: true,
      },
    },

    style: {
      table: {
        disable: true,
      },
    },

    as: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   STYLES
====================================== */

const containerStyle = {
  width: "360px",

  padding: "var(--space-lg)",

  border: "1px dashed var(--color-border-primary)",

  background: "var(--color-bg-secondary)",
};

const itemStyle = {
  padding: "var(--space-sm) var(--space-md)",

  background: "var(--color-primary-base)",

  color: "var(--color-text-inverse)",

  borderRadius: "var(--radius-md)",
};

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {
  args: {
    gap: "md",

    children: (
      <>
        <div style={itemStyle}>Item 1</div>

        <div style={itemStyle}>Item 2</div>

        <div style={itemStyle}>Item 3</div>
      </>
    ),

    style: containerStyle,
  },
};
