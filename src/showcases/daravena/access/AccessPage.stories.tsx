import type { Meta, StoryObj } from "@storybook/react-vite";

import { AccessPage } from "./AccessPage";

const meta: Meta<typeof AccessPage> = {
  title: "Showcases/Daravena/Access",
  component: AccessPage,
};

export default meta;

type Story = StoryObj<typeof AccessPage>;

export const Default: Story = {};
