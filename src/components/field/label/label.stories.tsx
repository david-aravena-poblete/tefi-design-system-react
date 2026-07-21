/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "@/components/field/label";

/* ======================================
   META
====================================== */

const meta: Meta<typeof Label> = {
  title: "Components/Field/Label",

  component: Label,

  tags: ["autodocs"],

  args: {
    children: "Email",
  },

  argTypes: {
    size: {
      control: "select",

      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {
  render: (args) => <Label {...args} />,
};

/* ======================================
   REQUIRED
====================================== */

export const Required: Story = {
  render: (args) => <Label {...args} required />,
};

/* ======================================
   SIZES
====================================== */

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Label size="sm">Small</Label>

      <Label size="md">Medium</Label>

      <Label size="lg">Large</Label>
    </div>
  ),
};
