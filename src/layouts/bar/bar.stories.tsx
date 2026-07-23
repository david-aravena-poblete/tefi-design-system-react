import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { Container } from "@/layouts/container";
import { Region } from "@/layouts/region";

import { Bar } from "./Bar";

const meta = {
  title: "Layouts/Bar",
  component: Bar,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Bar>;

export default meta;

type Story = StoryObj<typeof meta>;

const args = {
  direction: "horizontal",
  justify: "between",
  align: "center",
  gap: "md",
} satisfies Story["args"];

export const Default: Story = {
  args,

  render: (args) => (
    <Container>
      <Bar {...args}>
        <Region>
          <Button>Left</Button>
        </Region>

        <Region>
          <Button>Right</Button>
        </Region>
      </Bar>
    </Container>
  ),
};

export const Vertical: Story = {
  args: {
    ...args,
    direction: "vertical",
  },

  render: Default.render,
};

export const Justify: Story = {
  render: () => (
    <Container>
      <Bar justify="around">
        <Region>
          <Button>One</Button>
        </Region>

        <Region>
          <Button>Two</Button>
        </Region>
      </Bar>
    </Container>
  ),
};

export const Align: Story = {
  render: () => (
    <Container>
      <Bar align="stretch">
        <Region>
          <Button>Small</Button>
        </Region>

        <Region>
          <Button style={{ height: 64 }}>
            Tall
          </Button>
        </Region>
      </Bar>
    </Container>
  ),
};

export const Gap: Story = {
  render: () => (
    <Container>
      <Bar
        justify="start"
        gap="xxxl"
      >
        <Region>
          <Button>One</Button>
        </Region>

        <Region>
          <Button>Two</Button>
        </Region>

        <Region>
          <Button>Three</Button>
        </Region>
      </Bar>
    </Container>
  ),
};