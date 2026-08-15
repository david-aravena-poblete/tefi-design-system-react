/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "./Skeleton";

/* ======================================
   META
====================================== */

const meta = {
  title: "Primitives/Skeleton",

  component: Skeleton,

  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;

/* ======================================
   STORIES
====================================== */

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  render: () => (
    <Skeleton>
      <button>Guardar</button>
    </Skeleton>
  ),
};

export const Text: Story = {
  render: () => (
    <Skeleton>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Skeleton>
  ),
};

export const Heading: Story = {
  render: () => (
    <Skeleton>
      <h2>Skeleton Heading</h2>
    </Skeleton>
  ),
};

export const Avatar: Story = {
  render: () => (
    <Skeleton>
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "#ddd",
        }}
      />
    </Skeleton>
  ),
};

export const Card: Story = {
  render: () => (
    <Skeleton>
      <div
        style={{
          width: "320px",
          height: "180px",
          borderRadius: "12px",
          background: "#ddd",
        }}
      />
    </Skeleton>
  ),
};
