/* ======================================
   IMPORTS
====================================== */

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

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
  title: "Laboratory/Components/Text",

  component: Text,

  args: {
    children:
      "The quick brown fox jumps over the lazy dog.",
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {};

/* ======================================
   TYPOGRAPHY
====================================== */

export const Typography: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Text>
        Default
      </Text>

      <Text
        typography={{
          variant: "body-sm",
        }}
      >
        Body Small
      </Text>

      <Text
        typography={{
          variant: "body-md",
        }}
      >
        Body Medium
      </Text>
    </div>
  ),
};

/* ======================================
   WEIGHTS
====================================== */

export const Weights: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Text
        typography={{
          weight: "regular",
        }}
      >
        Regular
      </Text>

      <Text
        typography={{
          weight: "medium",
        }}
      >
        Medium
      </Text>

      <Text
        typography={{
          weight: "bold",
        }}
      >
        Bold
      </Text>
    </div>
  ),
};

/* ======================================
   COLORS
====================================== */

export const Colors: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Text>Black</Text>

      <Text
        surface={{
          text: "blue",
        }}
      >
        Blue
      </Text>

      <Text
        surface={{
          text: "red",
        }}
      >
        Red
      </Text>

      <Text
        surface={{
          text: "gray",
        }}
      >
        Gray
      </Text>
    </div>
  ),
};