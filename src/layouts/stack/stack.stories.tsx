import * as React from "react";

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { Stack } from "./Stack";
import { Button } from "../../components/button";


const meta: Meta<typeof Stack> = {
  title: "Layouts/Stack",

  component: Stack,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    gap: {
      control: "select",

      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "xxl",
        "xxxl",
      ],
    },

    align: {
      control: "select",

      options: [
        "start",
        "center",
        "end",
        "stretch",
      ],
    },

    justify: {
      control: "select",

      options: [
        "start",
        "center",
        "end",
        "between",
        "around",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;


/* ======================================
   SHARED
====================================== */

const sharedStyle = {
  width: "400px",
  minHeight: "240px",
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
        <Button>
          Botón 1
        </Button>

        <Button>
          Botón 2
        </Button>

        <Button>
          Botón 3
        </Button>
      </>
    ),
  },
};


export const AlignStart: Story = {
  args: {
    align: "start",

    gap: "md",

    style: sharedStyle,

    children: (
      <>
        <Button>
          Botón 1
        </Button>

        <Button>
          Botón 2
        </Button>

        <Button>
          Botón 3
        </Button>
      </>
    ),
  },
};


export const AlignCenter: Story = {
  args: {
    align: "center",

    gap: "md",

    style: sharedStyle,

    children: (
      <>
        <Button>
          Botón 1
        </Button>

        <Button>
          Botón 2
        </Button>

        <Button>
          Botón 3
        </Button>
      </>
    ),
  },
};


export const AlignEnd: Story = {
  args: {
    align: "end",

    gap: "md",

    style: sharedStyle,

    children: (
      <>
        <Button>
          Botón 1
        </Button>

        <Button>
          Botón 2
        </Button>

        <Button>
          Botón 3
        </Button>
      </>
    ),
  },
};


export const AlignStretch: Story = {
  args: {
    align: "stretch",

    gap: "md",

    style: sharedStyle,

    children: (
      <>
        <Button>
          Botón 1
        </Button>

        <Button>
          Botón 2
        </Button>

        <Button>
          Botón 3
        </Button>
      </>
    ),
  },
};


export const JustifyBetween: Story = {
  args: {
    justify: "between",

    gap: "md",

    style: sharedStyle,

    children: (
      <>
        <Button>
          Botón 1
        </Button>

        <Button>
          Botón 2
        </Button>

        <Button>
          Botón 3
        </Button>
      </>
    ),
  },
};