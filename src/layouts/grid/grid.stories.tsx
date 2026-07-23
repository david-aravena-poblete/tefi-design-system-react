import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "@/components/card";
import { Grid } from "@/layouts/grid";
import { Stack } from "@/layouts/stack";

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

      options: [1, 2, 3, 4, 6, 12],
    },

    gap: {
      control: "select",

      options: ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"],
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

export const ResponsiveGrid: Story = {
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

export const ResponsiveCards: Story = {
  args: {
    gap: "lg",

    children: (
      <>
        {[1, 2, 3].map((item) => (
          <Card key={item}>
            <Card.Body>
              <Stack gap="md">
                <strong>Skill {item}</strong>

                <p>Example responsive card.</p>
              </Stack>
            </Card.Body>
          </Card>
        ))}
      </>
    ),
  },
};

export const FixedTwoColumns: Story = {
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

export const FixedThreeColumns: Story = {
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