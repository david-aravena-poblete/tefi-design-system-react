/* ======================================
   IMPORTS
====================================== */

import React from "react";

import { Label } from "./Label";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Field/Label",

  component: Label,

  args: {
    children: "Email",
  },

  argTypes: {
    size: {
      control: "select",

      options: [
        "sm",
        "md",
        "lg",
      ],
    },
  },
};


/* ======================================
   PLAYGROUND
====================================== */

export const Playground = {};


/* ======================================
   REQUIRED
====================================== */

export const Required = {
  args: {
    required: true,
  },
};


/* ======================================
   SIZES
====================================== */

export function Sizes() {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >

      <Label size="sm">
        Small
      </Label>

      <Label size="md">
        Medium
      </Label>

      <Label size="lg">
        Large
      </Label>

    </div>
  );
}