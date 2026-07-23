import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { Bar } from "@/layouts/bar";
import { Container } from "@/layouts/container";

import { Region } from "./Region";

const meta = {
  title: "Layouts/Region",
  component: Region,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Region>;

export default meta;

type Story = StoryObj<typeof meta>;

const args = {} satisfies Story["args"];

export const Default: Story = {
  args,

  render: () => (
    <Container>
      <Region>
        <Button>Region</Button>
      </Region>
    </Container>
  ),
};

export const InsideBar: Story = {
  render: () => (
    <Container>
      <Bar>
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