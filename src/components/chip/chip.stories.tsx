/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";

import { Chip } from "./Chip";

import { Icon } from "@/primitives";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Chip",

  component: Chip,
};

/* ======================================
   STORIES
====================================== */

export function Default() {
  return <Chip>Design System</Chip>;
}

export function Icons() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >
      <Chip startIcon={<Icon name="search" size="sm" />}>Search</Chip>

      <Chip endIcon={<Icon name="search" size="sm" />}>Search</Chip>

      <Chip
        startIcon={<Icon name="search" size="sm" />}
        endIcon={<Icon name="search" size="sm" />}
      >
        Search
      </Chip>

      <Chip startIcon={<Icon name="search" size="sm" />} removable>
        Search
      </Chip>
    </div>
  );
}

export function Removable() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <Chip removable onRemove={() => setVisible(false)}>
      React
    </Chip>
  );
}

export function Sizes() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
      }}
    >
      <Chip size="sm">Small</Chip>

      <Chip size="md">Medium</Chip>

      <Chip size="lg">Large</Chip>
    </div>
  );
}

export function Disabled() {
  return (
    <Chip removable disabled>
      Disabled
    </Chip>
  );
}

export function LongContent() {
  return (
    <div
      style={{
        width: "220px",
      }}
    >
      <Chip removable>
        Very long selected item for testing truncation
      </Chip>
    </div>
  );
}