/* ======================================
   IMPORTS
====================================== */

import React from "react";

import { HelperText }
  from "./HelperText";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Field/HelperText",

  component: HelperText,

  args: {
    children:
      "We never share your email.",
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

      <HelperText size="sm">
        Small helper text
      </HelperText>

      <HelperText size="md">
        Medium helper text
      </HelperText>

      <HelperText size="lg">
        Large helper text
      </HelperText>

    </div>
  );
}