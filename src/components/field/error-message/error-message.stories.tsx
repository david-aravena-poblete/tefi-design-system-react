/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { ErrorMessage } from "@/components/field/error-message";

/* ======================================
   META
====================================== */

const meta: Meta<typeof ErrorMessage> = {
  title: "Components/Field/ErrorMessage",

  component: ErrorMessage,

  tags: ["autodocs"],

  args: {
    children: "This field is required.",
  },

  argTypes: {
    size: {
      control: "select",

      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {
  render: (args) => <ErrorMessage {...args} />,
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
      <ErrorMessage size="sm">Small error message</ErrorMessage>

      <ErrorMessage size="md">Medium error message</ErrorMessage>

      <ErrorMessage size="lg">Large error message</ErrorMessage>
    </div>
  ),
};
