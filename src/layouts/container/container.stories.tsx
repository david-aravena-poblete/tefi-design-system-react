/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Container } from "@/layouts/container";

/* ======================================
   META
====================================== */

const meta = {
  title: "Layouts/Container",

  component: Container,

  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {
    size: {
      control: "select",

      options: ["sm", "md", "lg", "xl", "full"],
    },
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   STYLES
====================================== */

const pageStyle = {
  minHeight: "400px",

  paddingBlock: "var(--space-xxl)",

  background: "var(--color-bg-primary)",
};

const containerStyle = {
  minHeight: "160px",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  border: "2px dashed var(--color-border-primary)",

  background: "var(--color-bg-secondary)",

  color: "var(--color-text-primary)",

  fontSize: "var(--font-lg)",

  fontWeight: "var(--font-weight-semibold)",

  textAlign: "center" as const,
};

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {
  args: {
    size: "md",

    children: "Container",

    style: containerStyle,
  },

  render: (args) => (
    <div style={pageStyle}>
      <Container {...args} />
    </div>
  ),
};

/* ======================================
   SIZES
====================================== */

export const Sizes: Story = {
  render: () => (
    <div style={pageStyle}>
      <Container size="sm" style={containerStyle}>
        sm — 640px
      </Container>

      <Container size="md" style={containerStyle}>
        md — 960px
      </Container>

      <Container size="lg" style={containerStyle}>
        lg — 1200px
      </Container>

      <Container size="xl" style={containerStyle}>
        xl — 1440px
      </Container>

      <Container size="full" style={containerStyle}>
        full — no maximum width
      </Container>
    </div>
  ),
};
