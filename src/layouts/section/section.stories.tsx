import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components/button";
import { Container } from "@/layouts/container";
import { Stack } from "@/layouts/stack";

import { Section } from "./Section";

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

      options: ["none", "sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Section>;

/* ======================================
   SHARED
====================================== */

const blockStyle = {
  border: "1px dashed var(--color-border-primary)",
  background: "var(--color-bg-secondary)",
  padding: "var(--space-lg)",
};

/* ======================================
   STORIES
====================================== */

export const Playground: Story = {
  args: {
    size: "md",

    children: (
      <Container>
        <div style={blockStyle}>Section Content</div>
      </Container>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Section size="none">
        <Container>
          <div style={blockStyle}>Section none</div>
        </Container>
      </Section>

      <Section size="sm">
        <Container>
          <div style={blockStyle}>Section sm</div>
        </Container>
      </Section>

      <Section size="md">
        <Container>
          <div style={blockStyle}>Section md</div>
        </Container>
      </Section>

      <Section size="lg">
        <Container>
          <div style={blockStyle}>Section lg</div>
        </Container>
      </Section>
    </>
  ),
};

export const LandingPage: Story = {
  render: () => (
    <>
      <Section size="lg">
        <Container>
          <div style={blockStyle}>Hero</div>
        </Container>
      </Section>

      <Section size="md">
        <Container>
          <Stack gap="lg">
            <div style={blockStyle}>Features</div>

            <Button>Learn More</Button>
          </Stack>
        </Container>
      </Section>

      <Section size="md">
        <Container>
          <div style={blockStyle}>Testimonials</div>
        </Container>
      </Section>

      <Section size="lg">
        <Container>
          <div style={blockStyle}>Footer</div>
        </Container>
      </Section>
    </>
  ),
};