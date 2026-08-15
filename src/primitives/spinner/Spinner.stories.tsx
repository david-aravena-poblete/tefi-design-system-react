/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Spinner } from "./Spinner";

/* ======================================
   CONSTANTS
====================================== */

const storyContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
} as const;

/* ======================================
   META
====================================== */

const meta = {
  title: "  Primitives/Spinner",

  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {};

/* ======================================
   SIZES
====================================== */

export const Sizes: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Spinner size="sm" />

      <Spinner size="md" />

      <Spinner size="lg" />
    </div>
  ),
};
