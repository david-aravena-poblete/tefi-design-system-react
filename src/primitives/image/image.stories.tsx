/* ======================================
   IMPORTS
====================================== */

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  Grid,
} from "../../layouts/grid";

import {
  Stack,
} from "../../layouts/stack";

import {
  Text,
} from "../../components/typography/text";

import {
  Image,
} from "./Image";

/* ======================================
   META
====================================== */

const meta: Meta<typeof Image> = {

  title: "Primitives/Image",

  component: Image,

  tags: ["autodocs"],

};

export default meta;

type Story =
  StoryObj<typeof Image>;

/* ======================================
   CONSTANTS
====================================== */

const image =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200";

/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {

  args: {

    src: image,

    alt: "Workspace",

  },

  render: (args) => (

    <div
      style={{
        width: 320,
      }}
    >

      <Image {...args} />

    </div>

  ),

};

/* ======================================
   ASPECT
====================================== */

export const Aspect: Story = {

  render: () => (

    <Stack gap="xl">

      <div>

        <Text>

          1:1

        </Text>

        <div
          style={{
            width: 320,
          }}
        >

          <Image
            src={image}
            alt="1:1"
            aspect="1:1"
          />

        </div>

      </div>

      <div>

        <Text>

          4:3

        </Text>

        <div
          style={{
            width: 320,
          }}
        >

          <Image
            src={image}
            alt="4:3"
            aspect="4:3"
          />

        </div>

      </div>

      <div>

        <Text>

          16:9

        </Text>

        <div
          style={{
            width: 320,
          }}
        >

          <Image
            src={image}
            alt="16:9"
            aspect="16:9"
          />

        </div>

      </div>

    </Stack>

  ),

};

/* ======================================
   FIT
====================================== */

export const Fit: Story = {

  render: () => (

    <Grid
      columns={2}
      gap="lg"
    >

      <div>

        <strong>

          Cover

        </strong>

        <div
          style={{
            width: 320,
            padding: 16,
            background: "#f3f4f6",
          }}
        >

          <Image
            src={image}
            alt="Cover"
            aspect="16:9"
            fit="cover"
          />

        </div>

      </div>

      <div>

        <strong>

          Contain

        </strong>

        <div
          style={{
            width: 320,
            padding: 16,
            background: "#f3f4f6",
          }}
        >

          <Image
            src={image}
            alt="Contain"
            aspect="16:9"
            fit="contain"
          />

        </div>

      </div>

    </Grid>

  ),

};
/* ======================================
   SKELETON
====================================== */

export const Skeleton: Story = {

  render: () => (

    <div
      style={{
        width: 320,
      }}
    >

      <Image
        skeleton
        aspect="16:9"
      />

    </div>

  ),

};