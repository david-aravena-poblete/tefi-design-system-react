import React from "react";

import { Button } from "./Button";

import { Icon } from "../../primitives/icon";

import { Stack } from "../../layouts/stack";

/* ======================================
   META
====================================== */

export default {

  title: "Components/Button",

  component: Button,

};

/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (

    <Button>

      Button

    </Button>

  );

}

/* ======================================
   VARIANTS
====================================== */

export function Variants() {

  return (

    <Stack gap="md">

      <Button variant="primary">
        Primary
      </Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="ghost">
        Ghost
      </Button>

      <Button variant="link">
        Link
      </Button>

      <Button variant="danger">
        Danger
      </Button>

    </Stack>

  );

}

/* ======================================
   SIZES
====================================== */

export function Sizes() {

  return (

    <Stack gap="md">

      <Button size="sm">
        Small
      </Button>

      <Button size="md">
        Medium
      </Button>

      <Button size="lg">
        Large
      </Button>

    </Stack>

  );

}

/* ======================================
   WITH ICONS
====================================== */

export function WithIcons() {

  return (

    <Stack gap="md">

      <Button>

        <Icon name="search" />

        Search

      </Button>

      <Button variant="secondary">

        Settings

        <Icon name="settings" />

      </Button>

      <Button variant="danger">

        <Icon name="trash" />

      </Button>

    </Stack>

  );

}

/* ======================================
   LOADING
====================================== */

export function Loading() {

  return (

    <Button loading>

      Saving...

    </Button>

  );

}

/* ======================================
   FULL WIDTH
====================================== */

export function FullWidth() {

  return (

    <Button fullWidth>

      Continue

    </Button>

  );

}

/* ======================================
   SKELETON
====================================== */

export function Skeleton() {

  return (

    <Button skeleton>

      Button

    </Button>

  );

}