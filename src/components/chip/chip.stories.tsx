/* ======================================
   IMPORTS
====================================== */

import React from "react";

import { Chip } from "./Chip";

import { Icon } from "../../primitives/icon";
import { Inline } from "../../layouts/inline";

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

    <Chip>

      Design System

    </Chip>

  );

}


/* ======================================
   ICONS
====================================== */

export function Icons() {

  return (

    <Inline gap="md" wrap>

      <Chip
        startIcon={
          <Icon
            name="search"
            size="sm"
          />
        }
      >

        Search

      </Chip>

      <Chip
        endIcon={
          <Icon
            name="search"
            size="sm"
          />
        }
      >

        Search

      </Chip>

      <Chip
        startIcon={
          <Icon
            name="search"
            size="sm"
          />
        }
        endIcon={
          <Icon
            name="search"
            size="sm"
          />
        }
      >

        Search

      </Chip>

      <Chip
        startIcon={
          <Icon
            name="search"
            size="sm"
          />
        }
        removable
      >

        Search

      </Chip>

    </Inline>

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
      removable
      onRemove={() =>
        setVisible(false)
      }
    >

      React

    </Chip>

  );

}


/* ======================================
   SIZES
====================================== */

export function Sizes() {

  return (

    <Inline gap="md">

      <Chip size="sm">

        Small

      </Chip>

      <Chip size="md">

        Medium

      </Chip>

      <Chip size="lg">

        Large

      </Chip>

    </Inline>

  );

}


/* ======================================
   DISABLED
====================================== */

export function Disabled() {

  return (

    <Chip
      removable
      disabled
    >

      Disabled

    </Chip>

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
        removable
      >

        Very long selected item for testing truncation

      </Chip>

    </div>

  );

}