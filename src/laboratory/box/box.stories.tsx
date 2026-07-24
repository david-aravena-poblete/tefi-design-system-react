import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "./Box";

import "./box.stories.css";

const meta = {
  title: "Laboratory/Box",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Box>
      Hola BabyBox 👶
    </Box>
  ),
};

export const Html: Story = {
  render: () => (
    <Box html="section">
      Soy un &lt;section&gt; 👶
    </Box>
  ),
};

export const DirectionRow: Story = {
  render: () => (
    <Box direction="row">
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </Box>
  ),
};

export const DirectionColumn: Story = {
  render: () => (
    <Box direction="column">
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </Box>
  ),
};

export const Between: Story = {
  render: () => (
    <Box
      direction="row"
      between="md"
    >
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </Box>
  ),
};

export const BetweenColumn: Story = {
  render: () => (
    <Box
      direction="column"
      between="md"
    >
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </Box>
  ),
};

export const AlignCenter: Story = {
  render: () => (
    <Box
      className="story-align"
      direction="row"
      between="md"
      align="center"
    >
      <div className="story-align-item-sm">A</div>
      <div className="story-align-item-md">B</div>
      <div className="story-align-item-lg">C</div>
    </Box>
  ),
};

export const NativeProps: Story = {
  render: () => (
    <Box
      id="babybox-native-test"
      className="babybox-test"
      aria-label="BabyBox native props test"
    >
      BabyBox acepta HTML nativo 👶
    </Box>
  ),
};

export const JustifyBetween: Story = {
  render: () => (
    <Box
      className="story-justify"
      direction="row"
      justify="between"
    >
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </Box>
  ),
};

export const Inside: Story = {
  render: () => (
    <Box
      inside="md"
      className="story-inside"
    >
      Tengo espacio dentro 👶
    </Box>
  ),
};

export const Outside: Story = {
  render: () => (
    <div className="story-outside-container">
      <Box
        outside="md"
        className="story-outside"
      >
        Tengo espacio afuera 👶
      </Box>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <Box
      inside="lg"
      radius="lg"
      className="story-radius"
    >
      Tengo esquinas redondas 👶
    </Box>
  ),
};

export const Surface: Story = {
  render: () => (
    <Box
      direction="column"
      between="md"
    >
      <Box
        inside="lg"
        radius="lg"
        surface="default"
      >
        Default
      </Box>

      <Box
        inside="lg"
        radius="lg"
        surface="elevated"
      >
        Elevated
      </Box>

      <Box
        inside="lg"
        radius="lg"
        surface="inverse"
        text="inverse"
      >
        Inverse
      </Box>
    </Box>
  ),
};

export const Border: Story = {
  render: () => (
    <Box
      inside="lg"
      radius="lg"
      surface="default"
      border="default"
    >
      Tengo borde 👶
    </Box>
  ),
};

export const MaxWidth: Story = {
  render: () => (
    <Box
      direction="column"
      inside="lg"
      radius="lg"
      surface="elevated"
      text="primary"
      border="default"
      maxWidth="sm"
    >
      <strong>BabyBox con límite 👶</strong>

      <span>
        Esta Box puede crecer, pero no debería superar el ancho definido por width-sm.
      </span>
    </Box>
  ),
};
