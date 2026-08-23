/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Grid } from "../../layouts/grid";

import { Stack } from "../../layouts/stack";

import { Text } from "../../components/typography/text";

import { Image } from "./Image";

/* ======================================
   META
====================================== */

const meta: Meta<typeof Image> = {
  title: "Primitives/Image",

  component: Image,

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Image>;

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
        <Text>1:1</Text>

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
        <Text>4:3</Text>

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
        <Text>16:9</Text>

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
        <strong>Cover</strong>

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
        <strong>Contain</strong>

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
   SOURCE CHANGE
====================================== */

export const SourceChange: Story = {
  render: () => {
    const images = [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
      setCurrentImage(
        (current) => (current + 1) % images.length,
      );
    };

    const previousImage = () => {
      setCurrentImage(
        (current) =>
          (current - 1 + images.length) % images.length,
      );
    };

    return (
      <Stack gap="md">
        <div
          style={{
            width: 320,
          }}
        >
          <Image
            src={images[currentImage]}
            alt={`Imagen ${currentImage + 1}`}
            aspect="16:9"
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
          }}
        >
          <button
            type="button"
            onClick={previousImage}
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextImage}
          >
            ›
          </button>
        </div>
      </Stack>
    );
  },
};