/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Heading } from "./Heading";

/* ======================================
   CONSTANTS
====================================== */

const storyContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
} as const;

/* ======================================
   META
====================================== */

const meta = {
  title: "Components/Heading",

  component: Heading,

  args: {
    children: "Heading",

    size: "md",

    weight: "bold",

    color: "black",

    as: "h1",
  },

  argTypes: {
    size: {
      control: "select",

      options: ["sm", "md", "lg"],
    },

    color: {
      control: "select",

      options: ["black", "gray", "blue", "red", "white"],
    },

    weight: {
      control: "select",

      options: ["regular", "medium", "semibold", "bold"],
    },

    align: {
      control: "select",

      options: ["start", "center", "end", "justify"],
    },

    case: {
      control: "select",

      options: ["uppercase", "lowercase", "capitalize"],
    },

    decoration: {
      control: "select",

      options: ["underline", "line-through"],
    },

    noWrap: {
      control: "boolean",
    },

    truncate: {
      control: "boolean",
    },

    as: {
      control: "select",

      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {};

/* ======================================
   LEVELS
====================================== */

export const Levels: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Heading as="h1" size="lg">
        Heading 1
      </Heading>

      <Heading as="h2" size="md">
        Heading 2
      </Heading>

      <Heading as="h3" size="sm">
        Heading 3
      </Heading>

      <Heading as="h4" size="sm">
        Heading 4
      </Heading>

      <Heading as="h5" size="sm">
        Heading 5
      </Heading>

      <Heading as="h6" size="sm">
        Heading 6
      </Heading>
    </div>
  ),
};

/* ======================================
   SIZES
====================================== */

export const Sizes: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Heading size="sm">Heading Small</Heading>

      <Heading size="md">Heading Medium</Heading>

      <Heading size="lg">Heading Large</Heading>
    </div>
  ),
};

/* ======================================
   WEIGHTS
====================================== */

export const Weights: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Heading size="lg" weight="regular">
        Regular — The quick brown fox
      </Heading>

      <Heading size="lg" weight="medium">
        Medium — The quick brown fox
      </Heading>

      <Heading size="lg" weight="semibold">
        Semibold — The quick brown fox
      </Heading>

      <Heading size="lg" weight="bold">
        Bold — The quick brown fox
      </Heading>
    </div>
  ),
};
