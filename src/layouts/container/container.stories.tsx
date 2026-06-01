import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "./Container";
import { Stack } from "../stack";
import { Button } from "../../components/button";


const meta: Meta<typeof Container> = {
  title: "Layouts/Container",

  component: Container,

  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {
    size: {
      control: "select",

      options: [
        "sm",
        "md",
        "lg",
        "xl",
        "full",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;


/* ======================================
   SHARED
====================================== */

const sharedStyle = {
  paddingBlock: "var(--space-xl)",
  border: "1px dashed var(--color-border-primary)",
  background: "var(--color-bg-secondary)",
};


/* ======================================
   STORIES
====================================== */

export const Default: Story = {
  args: {
    size: "md",

    children: (
      <div style={sharedStyle}>
        Container md
      </div>
    ),
  },
};


export const Small: Story = {
  args: {
    size: "sm",

    children: (
      <div style={sharedStyle}>
        Container sm
      </div>
    ),
  },
};


export const Large: Story = {
  args: {
    size: "lg",

    children: (
      <div style={sharedStyle}>
        Container lg
      </div>
    ),
  },
};


export const ExtraLarge: Story = {
  args: {
    size: "xl",

    children: (
      <div style={sharedStyle}>
        Container xl
      </div>
    ),
  },
};


export const FullWidth: Story = {
  args: {
    size: "full",

    children: (
      <div style={sharedStyle}>
        Container full
      </div>
    ),
  },
};


export const CompositionExample: Story = {
  args: {
    size: "md",

    children: (
      <Stack gap="lg">
        <div style={sharedStyle}>
          Header
        </div>

        <div style={sharedStyle}>
          Content
        </div>

        <Button>
          Action
        </Button>
      </Stack>
    ),
  },
};