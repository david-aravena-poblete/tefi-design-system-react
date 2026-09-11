import type { Meta, StoryObj } from "@storybook/react";

import { Markdown } from "./Markdown";

const markdown = `
# Contexto Base: Reglas Generales de Arquitectura Frontend

**Metodología:** Spec-Driven Development.

**Stack Tecnológico:** React, Next.js, Firebase, Supabase.

## 1. Patrón de Arquitectura por Vistas (Separación Estricta)

Cada vista de la aplicación debe estructurarse obligatoriamente bajo el siguiente árbol de responsabilidades y directorios:

* **Componente Lógico (Archivo Principal):**
  * Actúa como el orquestador principal de la vista.
  * Su única responsabilidad es renderizar los **Componentes de UI** y capturar sus eventos.
  * Sus métodos se limitan exclusivamente a tomar la información de la UI y delegarla a la capa de utilidades.

* **Componentes de UI:** Componentes presentacionales puros. Reciben información del Componente Lógico y emiten eventos de vuelta a él.

* **Directorio \`utils/\` (Nivel Hermano):** Contiene archivos con funciones puras. Su trabajo es recibir la información cruda del Componente Lógico, validarla, transformarla y prepararla con la estructura exacta que requiere el backend.

* **Directorio \`serverless/\`:** Capa de infraestructura. Contiene exclusivamente las funciones encargadas del fetch, envío y recepción de datos con los servicios del backend.

---

# Uso de Tefi Design System

Este proyecto utiliza \`@tefi/design-system\` para construir interfaces de usuario de manera declarativa y rápida.

## Componentes Principales

- **Layout:** \`Box\`, \`Container\`, \`Section\`, \`Grid\`
- **Flexbox:** \`Inline\`, \`Stack\`
- **Tipografía:** \`Heading\`, \`Text\`
- **Componentes Compuestos:** \`Card\`, \`Card.Media\`, \`Card.Body\`, \`Card.Footer\`
- **Elementos UI:** \`Button\`, \`Avatar\`, \`Image\`, \`Switch\`, \`Icon\`

## Ventajas

Al usar estos componentes, evitamos escribir CSS manualmente y logramos una UI consistente, limpia y de alto rendimiento.
`;

export default {
  title: "Components/Markdown",
  component: Markdown,
  args: {
    children: markdown,
  },
} satisfies Meta<typeof Markdown>;

type Story = StoryObj<typeof Markdown>;

export const Playground: Story = {};