import type { Meta, StoryObj } from "@storybook/react-vite";

import { ButtonSkeleton } from "./ButtonSkeleton";

const meta = {
  title: "Showcases/Default/Skeleton/Button",

  component: ButtonSkeleton,

  parameters: {
    controls: {
      disable: true,
    },
  },
} satisfies Meta<typeof ButtonSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
