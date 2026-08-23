/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { ExpandableText } from "./ExpandableText";

/* ======================================
   META
====================================== */

const meta: Meta<typeof ExpandableText> = {
  title: "Components/ExpandableText",

  component: ExpandableText,

  tags: ["autodocs"],

  args: {
    lines: 4,

    expandLabel: "Ver más",

    collapseLabel: "Ver menos",
  },

  argTypes: {
    children: {
      control: "text",
    },

    lines: {
      control: {
        type: "number",
        min: 1,
        step: 1,
      },
    },

    expandLabel: {
      control: "text",
    },

    collapseLabel: {
      control: "text",
    },

    skeleton: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {
  args: {
    children: `
      Diseñé un prompt modular para generar un personaje en distintas
      escenas manteniendo siempre su identidad visual.

      El sistema permite reutilizar la misma estructura para generar
      diferentes situaciones, escenarios y composiciones sin perder
      las características principales del personaje.

      De esta manera es posible mantener una identidad visual consistente
      entre distintas imágenes generadas mediante inteligencia artificial.
    `,
  },

  render: (args) => (
    <div
      style={{
        maxWidth: 500,
      }}
    >
      <ExpandableText {...args} />
    </div>
  ),
};

/* ======================================
   SHORT CONTENT
====================================== */

export const ShortContent: Story = {
  args: {
    children: "Este es un texto corto.",
  },

  render: (args) => (
    <div
      style={{
        maxWidth: 500,
      }}
    >
      <ExpandableText {...args} />
    </div>
  ),
};

/* ======================================
   CUSTOM LABELS
====================================== */

export const CustomLabels: Story = {
  args: {
    children: `
      Este texto utiliza etiquetas personalizadas para controlar
      el contenido que aparece cuando el usuario puede expandir
      o contraer el texto.
      
      Esta historia permite comprobar que ambas etiquetas se
      muestran correctamente durante los distintos estados.
    `,

    expandLabel: "Mostrar descripción",

    collapseLabel: "Ocultar descripción",
  },

  render: (args) => (
    <div
      style={{
        maxWidth: 500,
      }}
    >
      <ExpandableText {...args} />
    </div>
  ),
};

/* ======================================
   SKELETON
====================================== */

export const Skeleton: Story = {
  args: {
    skeleton: true,

    children: `
      Diseñé un prompt modular para generar un personaje en distintas
      escenas manteniendo siempre su identidad visual.

      El sistema permite reutilizar la misma estructura para generar
      diferentes situaciones, escenarios y composiciones sin perder
      las características principales del personaje.

      De esta manera es posible mantener una identidad visual consistente
      entre distintas imágenes generadas mediante inteligencia artificial.
    `,
  },

  render: (args) => (
    <div
      style={{
        maxWidth: 500,
      }}
    >
      <ExpandableText {...args} />
    </div>
  ),
};
