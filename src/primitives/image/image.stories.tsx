import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { Image } from "./Image";

/* ======================================
   META
====================================== */

const meta: Meta<typeof Image> = {
  title: "Primitives/Image",

  component: Image,

  tags: ["autodocs"],
};

export default meta;

type Story =
  StoryObj<typeof Image>;

/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    alt: "Workspace",
  },
};

/* ======================================
   RATIO
====================================== */

export const Square: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    alt: "Workspace",
    ratio: "1:1",
  },
};

export const FourByThree: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    alt: "Workspace",
    ratio: "4:3",
  },
};

export const SixteenByNine: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    alt: "Workspace",
    ratio: "16:9",
  },
};

/* ======================================
   FIT
====================================== */

export const Contain: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    alt: "Workspace",
    fit: "contain",
  },
};