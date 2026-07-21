import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextSkeleton } from "./TextSkeleton";

/* ======================================
     META
  ====================================== */

const meta: Meta<typeof TextSkeleton> = {
  title: "Showcases/Default/Skeleton/Text",

  component: TextSkeleton,

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextSkeleton>;

/* ======================================
     DEFAULT
  ====================================== */

export const Default: Story = {};
