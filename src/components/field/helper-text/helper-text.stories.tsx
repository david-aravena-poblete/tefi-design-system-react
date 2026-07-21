/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { HelperText } from "@/components/field/helper-text";

/* ======================================
   META
====================================== */

const meta: Meta<typeof HelperText> = {
  title: "Components/Field/HelperText",

  component: HelperText,

  tags: ["autodocs"],

  args: {
    children: "We never share your email.",
  },

  argTypes: {
    size: {
      control: "select",

      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof HelperText>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {
  render: (args) => <HelperText {...args} />,
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
      <HelperText size="sm">Small helper text</HelperText>

      <HelperText size="md">Medium helper text</HelperText>

      <HelperText size="lg">Large helper text</HelperText>
    </div>
  ),
};
