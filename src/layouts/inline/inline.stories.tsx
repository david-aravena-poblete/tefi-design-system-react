import * as React from "react";

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { Inline } from "./Inline";
import { Button } from "../../components/button";


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
        "baseline",
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

type Story = StoryObj<typeof Inline>;


/* ======================================
   SHARED
====================================== */

const sharedStyle = {
  width: "600px",
  minHeight: "160px",
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


export const AlignBaseline: Story = {
  args: {
    align: "baseline",

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