import type { Meta, StoryObj } from "@storybook/react-vite";

import { Typewriter } from "./Typewriter";

/* ======================================
     META
  ====================================== */

const meta: Meta<typeof Typewriter> = {
  title: "Components/Typewriter",

  component: Typewriter,

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Typewriter>;

/* ======================================
     DEFAULT
  ====================================== */

export const Default: Story = {
  args: {
    text: "Mi filosofía es que la Inteligencia Artificial debe amplificar las capacidades humanas.",
  },
};

export const Fast: Story = {
  args: {
    text: "Escritura rápida.",
    speed: 20,
  },
};

export const WithoutCursor: Story = {
  args: {
    text: "Sin cursor.",
    cursor: false,
  },
};
