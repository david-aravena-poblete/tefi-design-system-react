/* ======================================
   IMPORTS
====================================== */

import React from "react";
import { Chip } from "./Chip";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Chip",

  component: Chip,
};


/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (
    <Chip
      label="Design System"
    />
  );
}


/* ======================================
   REMOVABLE
====================================== */

export function Removable() {

    const [visible, setVisible] =
      React.useState(true);
  
    if (!visible) {
      return null;
    }
  
    return (
      <Chip
        label="React"
  
        removable
  
        onRemove={() =>
          setVisible(false)
        }
      />
    );
  }


/* ======================================
   SIZES
====================================== */

export function Sizes() {

  return (
    <div
      style={{
        display: "flex",

        alignItems: "center",

        gap: "12px",
      }}
    >

      <Chip
        label="Small"

        size="sm"
      />

      <Chip
        label="Medium"

        size="md"
      />

      <Chip
        label="Large"

        size="lg"
      />

    </div>
  );
}


/* ======================================
   DISABLED
====================================== */

export function Disabled() {

  return (
    <Chip
      label="Disabled"

      removable

      disabled
    />
  );
}


/* ======================================
   LONG CONTENT
====================================== */

export function LongContent() {

  return (
    <div
      style={{
        width: "220px",
      }}
    >

      <Chip
        label="
          Very long selected item
          for testing truncation
        "

        removable
      />

    </div>
  );
}