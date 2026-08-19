/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "./Text";

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
  title: "Components/Text",

  component: Text,

  args: {
    children: "The quick brown fox jumps over the lazy dog.",

    size: "md",

    weight: "regular",

    color: "black",
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

    expandable: {
      control: "boolean",
    },

    lines: {
      control: "number",
    },
  },
} satisfies Meta<typeof Text>;

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
      <Text size="xs">Extra Small</Text>

      <Text size="sm">Small</Text>

      <Text size="md">Medium</Text>

      <Text size="lg">Large</Text>

      <Text size="xl">Extra Large</Text>

      <Text size="2xl">2XL</Text>

      <Text size="3xl">3XL</Text>

      <Text size="4xl">4XL</Text>

      <Text size="5xl">5XL</Text>

      <Text size="6xl">6XL</Text>

      <Text size="7xl">7XL</Text>
    </div>
  ),
};

/* ======================================
   WEIGHTS
====================================== */

export const Weights: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Text weight="regular">Regular</Text>

      <Text weight="medium">Medium</Text>

      <Text weight="semibold">Semibold</Text>

      <Text weight="bold">Bold</Text>
    </div>
  ),
};

/* ======================================
   COLORS
====================================== */

export const Colors: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Text color="black">Black</Text>

      <Text color="gray">Gray</Text>

      <Text color="blue">Blue</Text>

      <Text color="red">Red</Text>
    </div>
  ),
};

/* ======================================
   ALIGN
====================================== */

export const Align: Story = {
  render: () => (
    <div
      style={{
        ...storyContainerStyle,
        width: "400px",
      }}
    >
      <Text align="start">Start aligned text</Text>

      <Text align="center">Center aligned text</Text>

      <Text align="end">End aligned text</Text>

      <Text align="justify">
        Justified text with enough content to demonstrate the alignment behavior.
      </Text>
    </div>
  ),
};

/* ======================================
   CASE
====================================== */

export const Case: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Text case="uppercase">uppercase text</Text>

      <Text case="lowercase">LOWERCASE TEXT</Text>

      <Text case="capitalize">capitalize this text</Text>
    </div>
  ),
};

/* ======================================
   DECORATION
====================================== */

export const Decoration: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Text decoration="underline">Underlined text</Text>

      <Text decoration="line-through">Line through text</Text>
    </div>
  ),
};

/* ======================================
   NO WRAP
====================================== */

export const NoWrap: Story = {
  render: () => (
    <div
      style={{
        ...storyContainerStyle,
        width: "200px",
      }}
    >
      <Text noWrap>This text should stay on one line.</Text>
    </div>
  ),
};

/* ======================================
   TRUNCATE
====================================== */

export const Truncate: Story = {
  render: () => (
    <div
      style={{
        width: "200px",
      }}
    >
      <Text truncate>
        This is a very long text that should be truncated when it reaches the available width.
      </Text>
    </div>
  ),
};

/* ======================================
   EXPANDABLE
====================================== */

export const Expandable: Story = {
  render: () => (
    <div
      style={{
        width: "300px",
      }}
    >
      <Text expandable lines={4}>
        This is a very long text that should demonstrate the expandable behavior. The content is
        initially limited to the configured number of lines and can be expanded to reveal the
        complete text.
      </Text>
    </div>
  ),
};

/* ======================================
   SKELETON
====================================== */

export const SkeletonState: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Text skeleton>Skeleton text</Text>

      <Text size="md" skeleton>
        Skeleton medium text
      </Text>

      <Text size="lg" skeleton>
        Skeleton large text
      </Text>

      <Text size="xs" skeleton>
        Skeleton extra small text
      </Text>
    </div>
  ),
};

/* ======================================
   SKELETON LONG
====================================== */

export const SkeletonLong: Story = {
  render: () => (
    <div
      style={{
        width: "300px",
      }}
    >
      <Text skeleton>
        This is a very long text that should demonstrate how the skeleton behaves when the text
        wraps into multiple lines.
      </Text>
    </div>
  ),
};
