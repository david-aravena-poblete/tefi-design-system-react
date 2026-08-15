import type { Meta, StoryObj } from "@storybook/react-vite";

import { NavbarShowcase } from "./NavbarShowcase";

const meta: Meta<typeof NavbarShowcase> = {
  title: "Showcases/Daravena/Navbar",
  component: NavbarShowcase,
};

export default meta;

type Story = StoryObj<typeof NavbarShowcase>;

export const Default: Story = {};