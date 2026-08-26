/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "@/components/card";
import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";

import { Image } from "@/primitives/image";

import { Carousel } from "./Carousel";

/* ======================================
   META
====================================== */

const meta = {
  title: "Primitives/Carousel",

  component: Carousel,

  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {
  args: {
    children: [
      <Image
        key="circuit-board"
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200"
        alt="Circuit board"
        aspect="16:9"
      />,

      <Image
        key="laptop"
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
        alt="Laptop"
        aspect="16:9"
      />,

      <Image
        key="programming-workspace"
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
        alt="Programming workspace"
        aspect="16:9"
      />,
    ],
  },

  render: (args) => (
    <div
      style={{
        maxWidth: "640px",
      }}
    >
      <Carousel {...args} />
    </div>
  ),
};

/* ======================================
   CARDS
====================================== */

export const Cards: Story = {
  args: {
    children: [
      <Card key="spec-driven-development">
        <Card.Body>
          <Heading
            as="h3"
            size="xl"
          >
            Spec Driven Development
          </Heading>

          <Text>
            Organización de contexto y especificaciones para trabajar
            con inteligencia artificial de forma consistente.
          </Text>
        </Card.Body>
      </Card>,

      <Card key="fine-tuning">
        <Card.Body>
          <Heading
            as="h3"
            size="xl"
          >
            Fine-Tuning
          </Heading>

          <Text>
            Preparación de ejemplos para enseñar patrones y comportamientos
            específicos a un modelo de inteligencia artificial.
          </Text>
        </Card.Body>
      </Card>,

      <Card key="ai-skills">
        <Card.Body>
          <Heading
            as="h3"
            size="xl"
          >
            AI Skills
          </Heading>

          <Text>
            Desarrollo de herramientas especializadas para que una IA pueda
            utilizar archivos, código y procesos concretos.
          </Text>
        </Card.Body>
      </Card>,
    ],
  },

  render: (args) => (
    <div
      style={{
        maxWidth: "480px",
      }}
    >
      <Carousel {...args} />
    </div>
  ),
};

/* ======================================
   TEXT
====================================== */

export const TextContent: Story = {
  args: {
    children: [
      <Text
        key="first"
        size="lg"
      >
        El primer contenido del Carousel puede ser cualquier elemento
        de React. No necesitamos conocer qué tipo de contenido estamos
        mostrando.
      </Text>,

      <Text
        key="second"
        size="lg"
      >
        El segundo contenido demuestra que el Carousel solamente se
        preocupa de navegar entre sus hijos.
      </Text>,

      <Text
        key="third"
        size="lg"
      >
        El tercer contenido confirma que podemos reutilizar el mismo
        componente para diferentes casos de uso.
      </Text>,
    ],
  },

  render: (args) => (
    <div
      style={{
        maxWidth: "640px",
      }}
    >
      <Carousel {...args} />
    </div>
  ),
};

/* ======================================
   SINGLE ITEM
====================================== */

export const SingleItem: Story = {
  args: {
    children: (
      <Image
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200"
        alt="Circuit board"
        aspect="16:9"
      />
    ),
  },

  render: (args) => (
    <div
      style={{
        maxWidth: "640px",
      }}
    >
      <Carousel {...args} />
    </div>
  ),
};