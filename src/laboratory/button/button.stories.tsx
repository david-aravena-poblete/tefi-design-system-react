/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

/* ======================================
   META
====================================== */

const meta = {
  title: "Laboratory/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   STORIES
====================================== */

export const Default: Story = {
  render: () => (
    <Button>
      BabyButton 👶
    </Button>
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
      <Button size="sm">
        Small
      </Button>

      <Button size="md">
        Medium
      </Button>

      <Button size="lg">
        Large
      </Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <Button variant="primary">
        Primary
      </Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="danger">
        Danger
      </Button>

      <Button variant="ghost">
        Ghost
      </Button>

      <Button variant="link">
        Link
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Button disabled>
      BabyButton disabled 👶
    </Button>
  ),
};

export const Click: Story = {
  render: () => (
    <Button
      onClick={() => {
        alert("BabyButton hizo click 👶");
      }}
    >
      Haz click 👶
    </Button>
  ),
};

export const BabyButton: Story = {
  render: () => (
    <Button>
      Baby Button
    </Button>
  ),
};