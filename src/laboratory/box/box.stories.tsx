/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "./Box";

import "./box.stories.css";

/* ======================================
   META
====================================== */

const meta = {
  title: "Laboratory/Box",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   STORIES
====================================== */

export const Default: Story = {
  render: () => (
    <Box>
      Hola Box 👶
    </Box>
  ),
};

export const Html: Story = {
  render: () => (
    <Box as="section">
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
    <Box direction="row" between="md">
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

export const Background: Story = {
  render: () => (
    <Box
      inside="lg"
      radius="lg"
      background="blue"
      color="white"
    >
      Background + Color 👶
    </Box>
  ),
};

export const Border: Story = {
  render: () => (
    <Box
      inside="lg"
      radius="lg"
      border="gray"
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
      background="gray-soft"
      border="gray"
      maxWidth="sm"
    >
      <strong>Box con límite 👶</strong>

      <span>
        Esta Box puede crecer, pero no debería superar el ancho definido.
      </span>
    </Box>
  ),
};

export const NativeProps: Story = {
  render: () => (
    <Box
      id="box-native-test"
      className="box-test"
      aria-label="Box native props test"
    >
      Box acepta HTML nativo 👶
    </Box>
  ),
};