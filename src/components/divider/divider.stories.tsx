import type { Meta, StoryObj } from "@storybook/react-vite";

import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div>
      <p>Primer bloque</p>

      <Divider />

      <p>Segundo bloque</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        height: "100px",
        gap: "16px",
      }}
    >
      <span>Izquierda</span>

      <Divider orientation="vertical" />

      <span>Derecha</span>
    </div>
  ),
};
