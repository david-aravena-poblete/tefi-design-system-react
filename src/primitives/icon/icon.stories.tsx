/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Icon } from "./Icon";

import { ICON_NAMES } from "./icons/icons.registry";

/* ======================================
    CONSTANTS
 ====================================== */

const storyContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  alignItems: "center",
} as const;

/* ======================================
    META
 ====================================== */

const meta = {
  title: "Primitives/Icon",

  component: Icon,

  args: {
    name: "search",
    size: "md",
  },

  argTypes: {
    name: {
      control: "select",

      options: ICON_NAMES,
    },

    size: {
      control: "select",

      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Icon>;

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
      <Icon name="search" size="sm" />

      <Icon name="search" size="md" />

      <Icon name="search" size="lg" />
    </div>
  ),
};

/* ======================================
    ICONS
 ====================================== */

export const Icons: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      {ICON_NAMES.map((name) => (
        <Icon key={name} name={name} />
      ))}
    </div>
  ),
};
