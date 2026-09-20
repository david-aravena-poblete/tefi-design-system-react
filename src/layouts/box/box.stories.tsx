/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Box } from "./Box";


/* ======================================
   META
====================================== */

const meta: Meta<typeof Box> = {
  title: "Layouts/Box",
  component: Box,
};

export default meta;

type Story = StoryObj<typeof Box>;


/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {
  args: {
    background: "surface-tertiary",
    radius: "lg",
    shadow: "sm",
    inside: "lg",
    maxWidth: "xs",
    overflow: "auto",
    scrollbar: "hidden",
    dragScroll: true,
  },

  render: (args) => (
    <Box {...args}>
      <div style={{ width: "500px" }}>
        Este contenido es deliberadamente más ancho que el Box para comprobar
        el scroll horizontal mediante drag.
      </div>
    </Box>
  ),
};


/* ======================================
   DRAG SCROLL — VERTICAL
====================================== */

export const DragScrollVertical: Story = {
  args: {
    background: "surface-tertiary",
    radius: "lg",
    shadow: "sm",
    inside: "lg",
    maxHeight: "120",
    scroll: "vertical",
    dragScroll: true,
  },

  render: (args) => (
    <Box {...args}>
      <p>
        Este contenido es deliberadamente más alto que el Box para comprobar
        el scroll vertical mediante drag.
      </p>

      <p>
        Mantén presionado el botón izquierdo del mouse y arrastra hacia arriba
        o hacia abajo.
      </p>

      <p>
        Este párrafo adicional genera suficiente contenido para provocar el
        desplazamiento vertical.
      </p>

      <p>
        Si el sistema funciona correctamente, podrás tomar el contenido con la
        mano y desplazarlo verticalmente.
      </p>

      <p>
        Último contenido de prueba para asegurarnos de que exista suficiente
        espacio para desplazarse.
      </p>
    </Box>
  ),
};


/* ======================================
   FOCUS — SCROLL
====================================== */

export const FocusScroll: Story = {
  args: {
    background: "surface-tertiary",
    radius: "lg",
    shadow: "sm",
    inside: "lg",
    maxHeight: "120",
    scroll: "vertical",
  },

  render: (args) => (
    <Box {...args}>
      <p>
        Contenido de prueba para el scroll.
      </p>

      <p>
        Este contenido es deliberadamente más alto que el Box para comprobar
        el comportamiento del foco en un scroll container.
      </p>

      <p>
        Si el Box recibe foco, debería aparecer el focus ring de la nueva
        capability Focus.
      </p>

      <p>
        Último párrafo para generar suficiente contenido vertical.
      </p>
    </Box>
  ),
};