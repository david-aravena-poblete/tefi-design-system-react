import React from "react";

import { Text } from "./Text";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Text",

  component: Text,
};

/* ======================================
   DEFAULT
====================================== */

export function Default() {
  return <Text>Lorem ipsum dolor sit amet.</Text>;
}

/* ======================================
   VARIANTS
====================================== */

export function Variants() {
  return (
    <div
      style={{
        display: "grid",
        gap: "12px",
      }}
    >
      <Text>Default text</Text>

      <Text variant="secondary">Secondary text</Text>

      <Text variant="muted">Muted text</Text>

      <div
        style={{
          background: "#111827",
          padding: "12px",
        }}
      >
        <Text variant="inverse">Inverse text</Text>
      </div>
    </div>
  );
}

/* ======================================
   SIZES
====================================== */

export function Sizes() {
  return (
    <div
      style={{
        display: "grid",
        gap: "12px",
      }}
    >
      <Text size="sm">Small text</Text>

      <Text size="md">Medium text</Text>
    </div>
  );
}

/* ======================================
   ELEMENTS
====================================== */

export function Elements() {
  return (
    <div
      style={{
        display: "grid",
        gap: "12px",
      }}
    >
      <Text as="p">Paragraph</Text>

      <Text as="span">Span</Text>

      <Text as="label">Label</Text>

      <Text as="div">Div</Text>
    </div>
  );
}
