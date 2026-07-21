import type { Meta, StoryObj } from "@storybook/react-vite";

import { ContactPage } from "./ContactPage";

const meta: Meta<typeof ContactPage> = {
  title: "Showcases/Daravena/Contact",
  component: ContactPage,
};

export default meta;

type Story = StoryObj<typeof ContactPage>;

export const Default: Story = {};
