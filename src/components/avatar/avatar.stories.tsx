import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Primitives/Avatar",
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {
  args: {},
};

/* ======================================
   IMAGE
====================================== */

export const Image: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Tefi Díaz",
  },
};

/* ======================================
   FALLBACK
====================================== */

export const Fallback: Story = {
  args: {
    fallback: "TD",
  },
};

/* ======================================
   SIZES
====================================== */

export const ExtraSmall: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Tefi Díaz",
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Tefi Díaz",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Tefi Díaz",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Tefi Díaz",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Tefi Díaz",
    size: "xl",
  },
};

/* ======================================
   SHAPES
====================================== */

export const Circle: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Tefi Díaz",
    shape: "circle",
  },
};

export const Rounded: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Tefi Díaz",
    shape: "rounded",
  },
};

export const Square: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Tefi Díaz",
    shape: "square",
  },
};
