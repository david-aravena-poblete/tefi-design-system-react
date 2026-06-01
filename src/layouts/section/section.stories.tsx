import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "./Section";
import { Container } from "../container";
import { Stack } from "../stack";
import { Button } from "../../components/button";


const meta: Meta<typeof Section> = {
  title: "Layouts/Section",

  component: Section,

  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {
    size: {
      control: "select",

      options: [
        "none",
        "sm",
        "md",
        "lg",
        "xl",
        "xxl",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Section>;


/* ======================================
   SHARED
====================================== */

const sharedStyle = {
  border: "1px dashed var(--color-border-primary)",
  background: "var(--color-bg-secondary)",
  padding: "var(--space-lg)",
};


/* ======================================
   STORIES
====================================== */

export const Default: Story = {
  args: {
    size: "md",

    children: (
      <Container>
        <div style={sharedStyle}>
          Section md
        </div>
      </Container>
    ),
  },
};


export const Small: Story = {
  args: {
    size: "sm",

    children: (
      <Container>
        <div style={sharedStyle}>
          Section sm
        </div>
      </Container>
    ),
  },
};


export const Large: Story = {
  args: {
    size: "lg",

    children: (
      <Container>
        <div style={sharedStyle}>
          Section lg
        </div>
      </Container>
    ),
  },
};


export const ExtraLarge: Story = {
  args: {
    size: "xl",

    children: (
      <Container>
        <div style={sharedStyle}>
          Section xl
        </div>
      </Container>
    ),
  },
};


export const NoSpacing: Story = {
  args: {
    size: "none",

    children: (
      <Container>
        <div style={sharedStyle}>
          Section none
        </div>
      </Container>
    ),
  },
};


export const CompositionExample: Story = {
  args: {
    size: "xl",

    children: (
      <Container>
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
      </Container>
    ),
  },
};