import type { Meta, StoryObj } from "@storybook/react-vite";

import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Layouts/Box",
  component: Box,
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    background: "gray-soft",
    radius: "lg",
    shadow: "sm",
    inside: "lg",
  },

  render: (args) => (
    <Box {...args}>
      Contenido del Box
    </Box>
  ),
};