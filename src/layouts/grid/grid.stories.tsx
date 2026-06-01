import * as React from "react";

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { Grid } from "./Grid";
import { Button } from "../../components/button";


const meta: Meta<typeof Grid> = {
  title: "Layouts/Grid",

  component: Grid,

  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {
    columns: {
      control: "select",

      options: [
        1,
        2,
        3,
        4,
        6,
        12,
      ],
    },

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
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;


/* ======================================
   SHARED
====================================== */

const itemStyle = {
  padding: "var(--space-lg)",
  border: "1px dashed var(--color-border-primary)",
  background: "var(--color-bg-secondary)",
};


/* ======================================
   STORIES
====================================== */

export const AutoFit: Story = {
  args: {
    gap: "lg",

    children: (
      <>
        <div style={itemStyle}>Item 1</div>
        <div style={itemStyle}>Item 2</div>
        <div style={itemStyle}>Item 3</div>
        <div style={itemStyle}>Item 4</div>
      </>
    ),
  },
};


export const TwoColumns: Story = {
  args: {
    columns: 2,

    gap: "lg",

    children: (
      <>
        <div style={itemStyle}>Item 1</div>
        <div style={itemStyle}>Item 2</div>
        <div style={itemStyle}>Item 3</div>
        <div style={itemStyle}>Item 4</div>
      </>
    ),
  },
};


export const ThreeColumns: Story = {
  args: {
    columns: 3,

    gap: "lg",

    children: (
      <>
        <div style={itemStyle}>Item 1</div>
        <div style={itemStyle}>Item 2</div>
        <div style={itemStyle}>Item 3</div>
        <div style={itemStyle}>Item 4</div>
      </>
    ),
  },
};


export const CompositionExample: Story = {
  args: {
    columns: 3,

    gap: "lg",

    children: (
      <>
        <Button>
          Action
        </Button>

        <Button>
          Action
        </Button>

        <Button>
          Action
        </Button>
      </>
    ),
  },
};