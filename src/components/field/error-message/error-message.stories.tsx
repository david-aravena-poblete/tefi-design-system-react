/* ======================================
   IMPORTS
====================================== */

import React from "react";
import { ErrorMessage } from "./ErrorMessage";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Field/ErrorMessage",

  component: ErrorMessage,

  args: {
    children:
      "This field is required.",
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

      <ErrorMessage size="sm">
        Small error message
      </ErrorMessage>

      <ErrorMessage size="md">
        Medium error message
      </ErrorMessage>

      <ErrorMessage size="lg">
        Large error message
      </ErrorMessage>

    </div>
  );
}