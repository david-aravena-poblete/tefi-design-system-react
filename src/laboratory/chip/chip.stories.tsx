/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "./Chip";

/* ======================================
   META
====================================== */

const meta = {
  title: "Laboratory/Chip",
  component: Chip,
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   STORIES
====================================== */

export const Default: Story = {
  render: () => (
    <Chip>
      React
    </Chip>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <Chip size="sm">
        Small
      </Chip>

      <Chip size="md">
        Medium
      </Chip>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <Chip variant="solid">
        Solid
      </Chip>

      <Chip variant="outline">
        Outline
      </Chip>
    </div>
  ),
};

export const Playground: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Chip>
        React
      </Chip>

      <Chip size="sm">
        TypeScript
      </Chip>

      <Chip variant="outline">
        Laboratory
      </Chip>

      <Chip
        size="sm"
        variant="outline"
      >
        Design System
      </Chip>
    </div>
  ),
};