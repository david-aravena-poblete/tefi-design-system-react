/* ======================================
   IMPORTS
====================================== */

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { Text } from "./Text";

/* ======================================
   META
====================================== */

const meta = {
  title: "Laboratory/Components/Text",

  component: Text,

  args: {
    as: "span",

    children: "Hello Design System 👋",

    typography: {
      variant: "heading-md",
      align: "center",
    },

    surface: {
      text: "blue",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   STORIES
====================================== */

export const Playground: Story = {};