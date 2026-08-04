/* ======================================
   IMPORTS
====================================== */

import type { Skill } from "@/laboratory/skill";

/* ======================================
   SKILL
====================================== */

export const surfaceSkill = {
  name: "Surface",

  namespace: "surface",

  description:
    "Controls the visual appearance of an element.",

  props: {
    background: {
      type: "select",

      options: [
        "blue",
        "blue-soft",
        "gray",
        "gray-soft",
        "red",
        "red-strong",
        "soft",
        "transparent",
      ],

      description:
        "Defines the background color.",
    },

    text: {
      type: "select",

      options: [
        "white",
        "black",
        "blue",
        "blue-soft",
        "gray",
        "red",
        "red-strong",
      ],

      description:
        "Defines the text color.",
    },

    border: {
      type: "select",

      options: [
        "blue",
        "gray",
        "red",
      ],

      description:
        "Defines the border color.",
    },

    borderWidth: {
      type: "select",

      options: [
        "none",
        "1",
        "2",
      ],

      description:
        "Defines the border width.",
    },

    borderStyle: {
      type: "select",

      options: [
        "solid",
        "dashed",
      ],

      description:
        "Defines the border style.",
    },

    radius: {
      type: "select",

      options: [
        "none",
        "sm",
        "md",
        "lg",
        "full",
      ],

      description:
        "Defines the border radius.",
    },
  },
} satisfies Skill;