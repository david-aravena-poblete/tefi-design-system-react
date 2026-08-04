/* ======================================
   IMPORTS
====================================== */

import type { Skill } from "@/laboratory/skill";

/* ======================================
   SKILL
====================================== */

export const layoutSkill = {
  name: "Layout",

  namespace: "layout",

  description:
    "Controls the layout and spacing of an element.",

  props: {
    display: {
      type: "select",

      options: [
        "flex",
        "inline-flex",
      ],

      description:
        "Defines the display mode.",
    },

    direction: {
      type: "select",

      options: [
        "row",
        "column",
      ],

      description:
        "Defines the main axis direction.",
    },

    align: {
      type: "select",

      options: [
        "start",
        "center",
        "end",
        "stretch",
        "baseline",
      ],

      description:
        "Aligns items on the cross axis.",
    },

    justify: {
      type: "select",

      options: [
        "start",
        "center",
        "end",
        "between",
      ],

      description:
        "Distributes items on the main axis.",
    },

    between: {
      type: "select",

      options: [
        "none",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
      ],

      description:
        "Defines the gap between children.",
    },

    inside: {
      type: "select",

      options: [
        "none",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
      ],

      description:
        "Applies padding to all sides.",
    },

    insideX: {
      type: "select",

      options: [
        "none",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
      ],

      description:
        "Applies horizontal padding.",
    },

    insideY: {
      type: "select",

      options: [
        "none",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
      ],

      description:
        "Applies vertical padding.",
    },

    outside: {
      type: "select",

      options: [
        "none",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
      ],

      description:
        "Applies margin to all sides.",
    },

    maxWidth: {
      type: "select",

      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
      ],

      description:
        "Defines the maximum width.",
    },

    minHeight: {
      type: "select",

      options: [
        "auto",
        "32",
        "40",
        "48",
      ],

      description:
        "Defines the minimum height.",
    },
  },
} satisfies Skill;