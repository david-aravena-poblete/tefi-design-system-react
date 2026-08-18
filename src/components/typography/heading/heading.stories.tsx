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

    size: "2xl",

    weight: "bold",

    lineHeight: "tight",

    color: "black",

    as: "h1",
  },

  argTypes: {
    size: {
      control: "select",

      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl"],
    },

    color: {
      control: "select",

      options: ["black", "gray", "blue", "red", "white"],
    },

    weight: {
      control: "select",

      options: ["regular", "medium", "semibold", "bold"],
    },

    lineHeight: {
      control: "select",

      options: ["tight", "normal", "relaxed"],
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
      <Heading as="h1" size="4xl">
        Heading 1
      </Heading>

      <Heading as="h2" size="3xl">
        Heading 2
      </Heading>

      <Heading as="h3" size="2xl">
        Heading 3
      </Heading>

      <Heading as="h4" size="xl">
        Heading 4
      </Heading>

      <Heading as="h5" size="lg">
        Heading 5
      </Heading>

      <Heading as="h6" size="md">
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
      <Heading size="md">Heading Medium</Heading>

      <Heading size="lg">Heading Large</Heading>

      <Heading size="xl">Heading Extra Large</Heading>

      <Heading size="2xl">Heading 2XL</Heading>

      <Heading size="3xl">Heading 3XL</Heading>

      <Heading size="4xl">Heading 4XL</Heading>

      <Heading size="5xl">Heading 5XL</Heading>
    </div>
  ),
};

/* ======================================
   WEIGHTS
====================================== */

export const Weights: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Heading size="2xl" weight="regular">
        Regular — The quick brown fox
      </Heading>

      <Heading size="2xl" weight="medium">
        Medium — The quick brown fox
      </Heading>

      <Heading size="2xl" weight="semibold">
        Semibold — The quick brown fox
      </Heading>

      <Heading size="2xl" weight="bold">
        Bold — The quick brown fox
      </Heading>
    </div>
  ),
};