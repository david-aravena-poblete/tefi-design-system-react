/* ======================================
   IMPORTS
====================================== */

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  Textarea,
} from "@/components/textarea";

import {
  STATES,
  SIZES,
} from "@/shared/constants";

/* ======================================
   META
====================================== */

const meta: Meta<typeof Textarea> = {

  title: "Components/Textarea/Textarea",

  component: Textarea,

  tags: ["autodocs"],

  args: {

    placeholder:
      "Write something...",

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

type Story =
  StoryObj<typeof Textarea>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {

  render: (args) => (

    <Textarea {...args} />

  ),

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