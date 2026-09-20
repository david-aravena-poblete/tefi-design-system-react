/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Box } from "@/layouts/box";

import { Grid } from "@/layouts/grid";

import { Button } from "@/components/button";

import { Card } from "./Card";


/* ======================================
   META
====================================== */

const meta: Meta<typeof Card> = {
  title: "Components/Card",

  component: Card,

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;


/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {
  render: () => (
    <Grid columns={3} gap="lg">
      <Card>
        <Card.Header>Header</Card.Header>

        <Card.Body>Body content</Card.Body>

        <Card.Footer>Footer</Card.Footer>
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
        <Card.Header>Outlined</Card.Header>

        <Card.Body>Default card style.</Card.Body>
      </Card>

      <Card variant="elevated">
        <Card.Header>Elevated</Card.Header>

        <Card.Body>Elevated card style.</Card.Body>
      </Card>

      <Card variant="flat">
        <Card.Header>Flat</Card.Header>

        <Card.Body>Transparent background.</Card.Body>
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
        <Card.Header>Small</Card.Header>

        <Card.Body>Small padding.</Card.Body>
      </Card>

      <Card size="md">
        <Card.Header>Medium</Card.Header>

        <Card.Body>Medium padding.</Card.Body>
      </Card>

      <Card size="lg">
        <Card.Header>Large</Card.Header>

        <Card.Body>Large padding.</Card.Body>
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
        <Card.Header>Card Media</Card.Header>

        <Card.Media>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
            alt="Workspace"
          />
        </Card.Media>

        <Card.Body>Image without body padding.</Card.Body>
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
        <Card.Header>Header</Card.Header>

        <Card.Body>Main content</Card.Body>

        <Card.Footer>Footer actions</Card.Footer>
      </Card>
    </Grid>
  ),
};


/* ======================================
   FOCUS WITHIN
====================================== */

export const FocusWithin: Story = {
  render: () => (
    <Card>
      <Card.Header>
        Scrollable content
      </Card.Header>

      <Card.Body>
        <Box
          maxHeight="160"
          scroll="vertical"
          scrollbar="hidden"
          inside="md"
          background="surface-tertiary"
          radius="md"
          border="default"
          borderWidth="1"
          borderStyle="solid"
        >
          <p>
            Este contenido existe para probar el comportamiento del foco
            cuando un elemento scrollable está dentro de un Card.
          </p>

          <p>
            El Box debe recibir el foco mediante Tab y mostrar su focus ring.
          </p>

          <p>
            El contenido debe poder desplazarse verticalmente utilizando el
            teclado.
          </p>

          <p>
            El Card debe reaccionar visualmente al foco del Box sin recibir
            el foco directamente.
          </p>

          <p>
            Estamos comprobando que el foco real y el indicador visual de la
            unidad compuesta puedan ser diferentes.
          </p>

          <p>
            Este párrafo adicional genera suficiente contenido para activar
            el scroll vertical.
          </p>

          <p>
            Otro bloque de contenido para asegurarnos de que el área
            desplazable sea claramente visible.
          </p>

          <p>
            Seguimos agregando contenido únicamente para la prueba de scroll.
          </p>

          <p>
            Penúltimo bloque de contenido.
          </p>

          <p>
            Último bloque de contenido de prueba.
          </p>
        </Box>
      </Card.Body>
    </Card>
  ),
};


/* ======================================
   BUTTON FOCUS
====================================== */

export const ButtonFocus: Story = {
  render: () => (
    <Card>
      <Card.Header>
        Button inside Card
      </Card.Header>

      <Card.Body>
        <Button>
          Focus me
        </Button>
      </Card.Body>
    </Card>
  ),
};