/* ======================================
   IMPORTS
====================================== */

import * as React from "react";

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  Card,
} from "./Card";

import {
  Grid,
} from "../../layouts/grid";

/* ======================================
   META
====================================== */

const meta: Meta<typeof Card> = {

  title: "Components/Card",

  component: Card,

  tags: ["autodocs"],

};

export default meta;

type Story =
  StoryObj<typeof Card>;

/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {

  render: () => (

    <Grid columns={3} gap="lg">

      <Card>

        <Card.Header>

          Header

        </Card.Header>

        <Card.Body>

          Body content

        </Card.Body>

        <Card.Footer>

          Footer

        </Card.Footer>

      </Card>

    </Grid>

  ),

};

/* ======================================
   VARIANTS
====================================== */

export const Variants: Story = {

  render: () => (

    <Grid columns={3} gap="lg">

      <Card variant="outlined">

        <Card.Header>

          Outlined

        </Card.Header>

        <Card.Body>

          Default card style.

        </Card.Body>

      </Card>

      <Card variant="elevated">

        <Card.Header>

          Elevated

        </Card.Header>

        <Card.Body>

          Uses shadow.

        </Card.Body>

      </Card>

      <Card variant="flat">

        <Card.Header>

          Flat

        </Card.Header>

        <Card.Body>

          Transparent background.

        </Card.Body>

      </Card>

    </Grid>

  ),

};

/* ======================================
   SIZES
====================================== */

export const Sizes: Story = {

  render: () => (

    <Grid columns={3} gap="lg">

      <Card size="sm">

        <Card.Header>

          Small

        </Card.Header>

        <Card.Body>

          Small padding.

        </Card.Body>

      </Card>

      <Card size="md">

        <Card.Header>

          Medium

        </Card.Header>

        <Card.Body>

          Medium padding.

        </Card.Body>

      </Card>

      <Card size="lg">

        <Card.Header>

          Large

        </Card.Header>

        <Card.Body>

          Large padding.

        </Card.Body>

      </Card>

    </Grid>

  ),

};

/* ======================================
   MEDIA
====================================== */

export const Media: Story = {

  render: () => (

    <Grid columns={3} gap="lg">

      <Card>

        <Card.Header>

          Card Media

        </Card.Header>

        <Card.Media>

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
            alt="Workspace"
          />

        </Card.Media>

        <Card.Body>

          Image without body padding.

        </Card.Body>

      </Card>

    </Grid>

  ),

};

/* ======================================
   SECTIONS
====================================== */

export const Sections: Story = {

  render: () => (

    <Grid columns={3} gap="lg">

      <Card>

        <Card.Header>

          Header

        </Card.Header>

        <Card.Body>

          Main content

        </Card.Body>

        <Card.Footer>

          Footer actions

        </Card.Footer>

      </Card>

    </Grid>

  ),

};