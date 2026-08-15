/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Section } from "./Section";

/* ======================================
   META
====================================== */

const meta = {
  title: "Layouts/Section",

  component: Section,

  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {
    size: {
      control: "select",

      options: ["none", "xs", "sm", "md", "lg", "xl", "2xl"],
    },
  },
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   STYLES
====================================== */

const pageStyle = {
  background: "var(--color-bg-primary)",
};

const contentStyle = {
  minHeight: "100px",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  border: "2px dashed var(--color-border-primary)",

  background: "var(--color-bg-secondary)",

  color: "var(--color-text-primary)",

  fontSize: "var(--font-lg)",

  fontWeight: "var(--font-weight-semibold)",
};

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {
  args: {
    size: "md",

    children: (
      <>
        <div style={contentStyle}>Content above</div>

        <div style={contentStyle}>Content below</div>
      </>
    ),
  },

  render: (args) => (
    <div style={pageStyle}>
      <Section {...args} />
    </div>
  ),
};

/* ======================================
   SIZES
====================================== */

export const Sizes: Story = {
  render: () => (
    <div style={pageStyle}>
      <Section size="none">
        <div style={contentStyle}>none — 0px</div>
      </Section>

      <Section size="xs">
        <div style={contentStyle}>xs — 16px</div>
      </Section>

      <Section size="sm">
        <div style={contentStyle}>sm — 24px</div>
      </Section>

      <Section size="md">
        <div style={contentStyle}>md — 32px</div>
      </Section>

      <Section size="lg">
        <div style={contentStyle}>lg — 48px</div>
      </Section>

      <Section size="xl">
        <div style={contentStyle}>xl — 64px</div>
      </Section>

      <Section size="2xl">
        <div style={contentStyle}>2xl — 96px</div>
      </Section>
    </div>
  ),
};
