/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Search, Mail, Eye } from "lucide-react";

import { Input } from "@/components/input";

import { STATES, SIZES } from "@/shared/constants";

/* ======================================
   META
====================================== */

const meta: Meta<typeof Input> = {
  title: "Components/Input/Input",

  component: Input,

  tags: ["autodocs"],

  parameters: {
    layout: "padded",
  },

  args: {
    placeholder: "Write something...",
  },

  argTypes: {
    state: {
      control: "select",

      options: STATES,
    },

    size: {
      control: "select",

      options: SIZES,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {
  render: (args) => <Input {...args} />,
};

/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {
  args: {
    state: "default",
  },
};

/* ======================================
   PREFIX
====================================== */

export const Prefix: Story = {
  args: {
    placeholder: "Search products...",

    startIcon: <Search size={16} />,
  },
};

/* ======================================
   SUFFIX
====================================== */

export const Suffix: Story = {
  args: {
    placeholder: "Enter email...",

    endIcon: <Mail size={16} />,
  },
};

/* ======================================
   PREFIX + SUFFIX
====================================== */

export const PrefixAndSuffix: Story = {
  args: {
    placeholder: "Search users...",

    startIcon: <Search size={16} />,

    endIcon: <Eye size={16} />,
  },
};

/* ======================================
   STATES
====================================== */

export const Error: Story = {
  args: {
    state: "error",
  },
};

export const Success: Story = {
  args: {
    state: "success",
  },
};

export const Warning: Story = {
  args: {
    state: "warning",
  },
};

/* ======================================
   SIZES
====================================== */

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

/* ======================================
   DISABLED
====================================== */

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/* ======================================
   LOADING
====================================== */

export const Loading: Story = {
  args: {
    loading: true,
  },
};
