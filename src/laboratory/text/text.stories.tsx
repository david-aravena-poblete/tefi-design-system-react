/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

/* ======================================
   META
====================================== */

const meta = {
  title: "Laboratory/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   STORIES
====================================== */

export const Default: Story = {
  render: () => (
    <Text>
      Lorem ipsum dolor sit amet.
    </Text>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "12px",
      }}
    >
      <Text size="xs">Extra Small</Text>
      <Text size="sm">Small</Text>
      <Text size="md">Medium</Text>
      <Text size="lg">Large</Text>
      <Text size="xl">Extra Large</Text>
      <Text size="2xl">2XL</Text>
      <Text size="3xl">3XL</Text>
      <Text size="4xl">4XL</Text>
      <Text size="5xl">5XL</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "12px",
      }}
    >
      <Text weight="regular">
        Regular
      </Text>

      <Text weight="medium">
        Medium
      </Text>

      <Text weight="semibold">
        Semibold
      </Text>

      <Text weight="bold">
        Bold
      </Text>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "12px",
      }}
    >
      <Text color="black">
        Black
      </Text>

      <Text color="gray">
        Gray
      </Text>

      <Text color="blue">
        Blue
      </Text>

      <Text color="red">
        Red
      </Text>

      <div
        style={{
          background: "#1f2937",
          padding: "12px",
        }}
      >
        <Text color="white">
          White
        </Text>
      </div>
    </div>
  ),
};

export const Elements: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "12px",
      }}
    >
      <Text as="p">
        Paragraph
      </Text>

      <Text as="span">
        Span
      </Text>

      <Text as="label">
        Label
      </Text>

      <Text as="strong">
        Strong
      </Text>

      <Text as="em">
        Emphasis
      </Text>

      <Text as="small">
        Small
      </Text>

      <Text as="mark">
        Mark
      </Text>

      <Text as="code">
        const message = "Hello";
      </Text>
    </div>
  ),
};

export const Align: Story = {
    render: () => (
      <div
        style={{
          display: "grid",
          gap: "12px",
          width: "320px",
        }}
      >
        <Text align="start">
          Start
        </Text>
  
        <Text align="center">
          Center
        </Text>
  
        <Text align="end">
          End
        </Text>
  
        <Text align="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis
          libero vitae justo facilisis vulputate.
        </Text>
      </div>
    ),
  };

export const Truncate: Story = {
  render: () => (
    <div
      style={{
        width: "200px",
      }}
    >
      <Text truncate>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
        velit vel lorem placerat aliquam.
      </Text>
    </div>
  ),
};

export const Playground: Story = {
  render: () => (
    <Text
      size="2xl"
      weight="bold"
      color="blue"
    >
      Laboratory Text
    </Text>
  ),
};