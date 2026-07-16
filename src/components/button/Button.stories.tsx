/* ======================================
   IMPORTS
====================================== */

import React from "react";

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  Button,
} from "./Button";

import {
  Icon,
} from "../../primitives/icon";

import {
  Stack,
} from "../../layouts/stack";

/* ======================================
   META
====================================== */

const meta: Meta<typeof Button> = {

  title: "Components/Button",

  component: Button,

  tags: ["autodocs"],

};

export default meta;

type Story =
  StoryObj<typeof Button>;

/* ======================================
   STORIES
====================================== */

export const Default: Story = {

  args: {

    children: "Button",

  },

};

export const Variant: Story = {

  render: () => (

    <Stack gap="md">

      <Button variant="primary">

        Primary

      </Button>

      <Button variant="secondary">

        Secondary

      </Button>

      <Button variant="ghost">

        Ghost

      </Button>

      <Button variant="link">

        Link

      </Button>

      <Button variant="danger">

        Danger

      </Button>

    </Stack>

  ),

};

export const Size: Story = {

  render: () => (

    <Stack gap="md">

      <Button size="sm">

        Small

      </Button>

      <Button size="md">

        Medium

      </Button>

      <Button size="lg">

        Large

      </Button>

    </Stack>

  ),

};

export const WithIcons: Story = {

  render: () => (

    <Stack gap="md">

      <Button
        startIcon={
          <Icon name="search" />
        }
      >

        Start Icon

      </Button>

      <Button
        endIcon={
          <Icon name="search" />
        }
      >

        End Icon

      </Button>

      <Button
        startIcon={
          <Icon name="search" />
        }
        endIcon={
          <Icon name="search" />
        }
      >

        Start + End Icon

      </Button>

    </Stack>

  ),

};

export const Loading: Story = {

  args: {

    loading: true,

    children: "Loading",

  },

};

export const Disabled: Story = {

  args: {

    disabled: true,

    children: "Disabled",

  },

};

export const FullWidth: Story = {

  args: {

    fullWidth: true,

    children: "Full Width",

  },

};

export const Skeleton: Story = {

  args: {

    skeleton: true,

    children: "Skeleton",

  },

};