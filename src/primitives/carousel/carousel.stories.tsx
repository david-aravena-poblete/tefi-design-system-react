/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Box } from "@/layouts/box";
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
    controls: "overlay",

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
    controls: "outside",

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
    controls: "outside",

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
    controls: "overlay",

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

/* ======================================
   DIFFERENT HEIGHTS
====================================== */

export const DifferentHeights: Story = {
  args: {
    controls: "outside",

    children: [
      <Card key="short">
        <Card.Body>
          <Heading
            as="h3"
            size="xl"
          >
            Contenido corto
          </Heading>

          <Text>
            Este slide tiene poco contenido.
          </Text>
        </Card.Body>
      </Card>,

      <Card key="medium">
        <Card.Body>
          <Heading
            as="h3"
            size="xl"
          >
            Contenido mediano
          </Heading>

          <Text>
            Este slide tiene más contenido que el anterior.
          </Text>

          <Text>
            Los controles deben permanecer estables.
          </Text>
        </Card.Body>
      </Card>,

      <Card key="long">
        <Card.Body>
          <Heading
            as="h3"
            size="xl"
          >
            Contenido largo
          </Heading>

          <Text>
            Este slide tiene más contenido vertical que los
            anteriores.
          </Text>

          <Text>
            Todos los slides permanecen montados dentro del
            mismo viewport.
          </Text>

          <Text>
            La altura debe permanecer estable al navegar entre
            slides.
          </Text>
        </Card.Body>
      </Card>,
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
   MAX HEIGHT
====================================== */

export const MaxHeight: Story = {
  args: {
    controls: "outside",
    maxHeight: "480",

    children: [
      <Card key="normal">
        <Card.Body>
          <Heading
            as="h3"
            size="xl"
          >
            Contenido normal
          </Heading>

          <Text>
            Este contenido cabe dentro del área disponible.
          </Text>
        </Card.Body>
      </Card>,

      <Box
        key="large"
        maxHeight="480"
        overflow="auto"
        scrollbar="hidden"
        dragScroll
        tabIndex={0}
        radius="md"
      >
        <Card>
          <Card.Body>
            <Heading
              as="h3"
              size="xl"
            >
              Contenido muy grande
            </Heading>

            <Text>
              Este slide tiene una cantidad de contenido
              deliberadamente grande para comprobar el límite
              vertical del Carousel.
            </Text>

            <Text>
              El contenido ahora puede desplazarse dentro del Box.
            </Text>

            <Text>
              Mantén presionado el botón izquierdo del mouse y
              arrastra hacia arriba o hacia abajo.
            </Text>

            <Text>
              El Carousel sigue siendo responsable únicamente de
              presentar y navegar entre sus slides.
            </Text>

            <Text>
              El Box controla el espacio disponible y el
              desplazamiento del contenido.
            </Text>

            <Text>
              Este contenido adicional existe para generar
              suficiente altura para el scroll.
            </Text>

            <Text>
              Puedes continuar arrastrando para comprobar que
              todo el contenido permanece accesible.
              Puedes continuar arrastrando para comprobar que
              todo el contenido permanece accesible.Puedes continuar arrastrando para comprobar que
              todo el contenido permanece accesible.Puedes continuar arrastrando para comprobar que
              todo el contenido permanece accesible.Puedes continuar arrastrando para comprobar que
              todo el contenido permanece accesible.
            </Text>

            <Text>
              Último contenido de prueba.
            </Text>
          </Card.Body>
        </Card>
      </Box>,
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