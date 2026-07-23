import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components/button";
import { Inline } from "@/layouts/inline";

const meta: Meta<typeof Inline> = {
  title: "Layouts/Inline",

  component: Inline,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    gap: {
      control: "select",

      options: ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Inline>;

/* ======================================
   SHARED
====================================== */

const sharedStyle = {
  padding: "var(--space-md)",
  border: "1px dashed var(--color-border-primary)",
};

/* ======================================
   STORIES
====================================== */

export const Default: Story = {
  args: {
    gap: "md",

    style: sharedStyle,

    children: (
      <>
        <Button>Botón 1</Button>

        <Button>Botón 2</Button>

        <Button>Botón 3</Button>
      </>
    ),
  },
};

export const SmallGap: Story = {
  args: {
    gap: "sm",

    style: sharedStyle,

    children: (
      <>
        <Button>Botón 1</Button>

        <Button>Botón 2</Button>

        <Button>Botón 3</Button>
      </>
    ),
  },
};

export const LargeGap: Story = {
  args: {
    gap: "xl",

    style: sharedStyle,

    children: (
      <>
        <Button>Botón 1</Button>

        <Button>Botón 2</Button>

        <Button>Botón 3</Button>
      </>
    ),
  },
};