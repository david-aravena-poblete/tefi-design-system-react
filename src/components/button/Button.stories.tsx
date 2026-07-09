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
   ICONS
====================================== */

export function Icons() {

  return (

    <Stack gap="md">

      <Button
        startIcon={
          <Icon name="search" />
        }
      >

        Search

      </Button>

      <Button
        variant="secondary"
        endIcon={
          <Icon name="search" />
        }
      >

        Settings

      </Button>

      <Button
        variant="primary"
        startIcon={
          <Icon name="search" />
        }
        endIcon={
          <Icon name="search" />
        }
      >

        Download

      </Button>

      <Button
        variant="danger"
        startIcon={
          <Icon name="search" />
        }
      >

        Delete

      </Button>

      <Button
        variant="ghost"
        startIcon={
          <Icon name="search" />
        }
      >

        Profile

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