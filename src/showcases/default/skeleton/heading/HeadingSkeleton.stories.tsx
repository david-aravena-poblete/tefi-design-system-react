import type { Meta, StoryObj } from "@storybook/react-vite";

import { HeadingSkeleton } from "./HeadingSkeleton";

/* ======================================
     META
  ====================================== */

const meta = {
  title: "Showcases/Default/Skeleton/Heading",

  component: HeadingSkeleton,
} satisfies Meta<typeof HeadingSkeleton>;

export default meta;

/* ======================================
     STORIES
  ====================================== */

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
