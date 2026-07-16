/* ======================================
   IMPORTS
====================================== */

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  SIZES,
} from "../../foundations/design-system.types";

import {
  Spinner,
} from "./Spinner";

/* ======================================
   META
====================================== */

const meta = {

  title: "Primitives/Spinner",

  component: Spinner,

  argTypes: {

    size: {
      control: "select",

      options: SIZES,
    },

    className: {
      table: {
        disable: true,
      },
    },

  },

} satisfies Meta<typeof Spinner>;

export default meta;

/* ======================================
   STORIES
====================================== */

type Story =
  StoryObj<typeof meta>;

export const Playground: Story = {

  args: {
    size: "md",
  },

};

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