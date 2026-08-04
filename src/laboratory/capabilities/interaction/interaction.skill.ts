/* ======================================
   IMPORTS
====================================== */

import type { Skill } from "@/laboratory/skill";

/* ======================================
   SKILL
====================================== */

export const interactionSkill = {
  name: "Interaction",

  namespace: "interaction",

  description:
    "Controls the interactive behavior of an element.",

  props: {
    hover: {
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
        "white",
      ],

      description:
        "Defines the hover appearance.",
    },

    press: {
      type: "select",

      options: [
        "move",
      ],

      description:
        "Defines the press behavior.",
    },

    focusRing: {
      type: "select",

      options: [
        "blue",
        "blue-soft",
        "blue-transparent",
        "white",
      ],

      description:
        "Defines the focus ring style.",
    },

    transition: {
      type: "select",

      options: [
        "fast",
      ],

      description:
        "Defines the transition preset.",
    },
  },
} satisfies Skill;