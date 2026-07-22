/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Icon } from "./Icon";

/* ======================================
   META
====================================== */

const meta = {
  title: "Primitives/Icon",
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

/* ======================================
   STORIES
====================================== */

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
