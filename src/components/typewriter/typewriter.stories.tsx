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

/* ======================================
   FAST
====================================== */

export const Fast: Story = {
  args: {
    text: "Escritura rápida.",
    speed: 20,
  },
};

/* ======================================
   WITH ICON
====================================== */

export const WithIcon: Story = {
  args: {
    text: "Escritura con icono.",
    icon: "bot",
  },
};

/* ======================================
   ICON ONLY
====================================== */

export const IconOnly: Story = {
  args: {
    text: "El icono reemplaza al cursor.",
    cursor: false,
    icon: "bot",
  },
};

/* ======================================
   WITHOUT CURSOR
====================================== */

export const WithoutCursor: Story = {
  args: {
    text: "Sin cursor.",
    cursor: false,
  },
};