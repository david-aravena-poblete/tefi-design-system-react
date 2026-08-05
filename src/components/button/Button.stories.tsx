/* ======================================
   IMPORTS
====================================== */
import { Icon } from "@/primitives";

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { Button } from "./Button";

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
  title: "Components/Button",

  component: Button,

  args: {
    children: "Button",
    variant: "primary",
    size: "md",
  },

  argTypes: {
    variant: {
      control: "select",

      options: [
        "primary",
        "secondary",
        "danger",
        "ghost",
        "link",
      ],
    },

    size: {
      control: "select",

      options: [
        "sm",
        "md",
      ],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {};

/* ======================================
   VARIANTS
====================================== */

export const Variants: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Button
        variant="primary"
        startIcon={<Icon name="search" />}
      >
        Primary
      </Button>

      <Button
        variant="secondary"
        startIcon={<Icon name="user" />}
      >
        Secondary
      </Button>

      <Button
        variant="danger"
        startIcon={<Icon name="close" />}
      >
        Danger
      </Button>

      <Button
        variant="ghost"
        startIcon={<Icon name="plus" />}
      >
        Ghost
      </Button>

      <Button
        variant="link"
        startIcon={<Icon name="sun" />}
      >
        Link
      </Button>
    </div>
  ),
};

/* ======================================
   SIZES
====================================== */

export const Sizes: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Button size="sm">
        Small
      </Button>

      <Button size="md">
        Medium
      </Button>
    </div>
  ),
};

/* ======================================
   STATES
====================================== */

export const States: Story = {
  render: () => (
    <div style={storyContainerStyle}>
      <Button>
        Default
      </Button>

      <Button disabled>
        Disabled
      </Button>
    </div>
  ),
};