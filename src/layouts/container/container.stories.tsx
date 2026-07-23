/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components/button";
import { Container } from "@/layouts/container";
import { Section } from "@/layouts/section";
import { Stack } from "@/layouts/stack";

/* ======================================
   META
====================================== */

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

      options: ["sm", "md", "lg", "xl", "full"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

/* ======================================
   SHARED
====================================== */

const sharedStyle = {
  padding: "var(--space-xl)",

  border: "1px dashed var(--color-border-primary)",

  background: "var(--color-bg-secondary)",
};

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {
  args: {
    size: "md",

    children: <div style={sharedStyle}>Container Content</div>,
  },
};

/* ======================================
   WIDTHS
====================================== */

export const Widths: Story = {
  render: () => (
    <Stack gap="lg">
      <Container size="sm">
        <div style={sharedStyle}>Small (640px)</div>
      </Container>

      <Container size="md">
        <div style={sharedStyle}>Medium (960px)</div>
      </Container>

      <Container size="lg">
        <div style={sharedStyle}>Large (1200px)</div>
      </Container>

      <Container size="xl">
        <div style={sharedStyle}>Extra Large (1440px)</div>
      </Container>

      <Container size="full">
        <div style={sharedStyle}>Full Width</div>
      </Container>
    </Stack>
  ),
};

/* ======================================
   PAGE LAYOUT
====================================== */

export const PageLayout: Story = {
  render: () => (
    <Section>
      <Container size="md">
        <Stack gap="lg">
          <div style={sharedStyle}>Header</div>

          <div style={sharedStyle}>Main Content</div>

          <div style={sharedStyle}>Footer</div>
        </Stack>
      </Container>
    </Section>
  ),
};

/* ======================================
   CONTACT FORM
====================================== */

export const ContactFormExample: Story = {
  render: () => (
    <Section>
      <Container size="sm">
        <Stack gap="lg">
          <div style={sharedStyle}>Contact Form</div>

          <Button>Submit</Button>
        </Stack>
      </Container>
    </Section>
  ),
};