/* ======================================
   IMPORTS
====================================== */

import type { Skill } from "@/laboratory/skill";

/* ======================================
   SKILL
====================================== */

export const typographySkill = {
  name: "Typography",

  namespace: "typography",

  description: "Applies typographic appearance to an element.",

  props: {
    variant: {
      type: "select",

      options: [
        "body-sm",
        "body-md",
        "body-lg",
        "heading-sm",
        "heading-md",
        "heading-lg",
        "caption",
      ],

      description: "Defines the typography preset.",
    },

    weight: {
      type: "select",

      options: ["regular", "medium", "semibold", "bold"],

      description: "Overrides the font weight.",
    },

    align: {
      type: "select",

      options: ["start", "center", "end", "justify"],

      description: "Aligns the text horizontally.",
    },

    transform: {
      type: "select",

      options: ["uppercase", "lowercase", "capitalize"],

      description: "Transforms the casing of the text.",
    },

    decoration: {
      type: "select",

      options: ["underline", "line-through"],

      description: "Applies text decorations.",
    },

    wrap: {
      type: "select",

      options: ["wrap", "nowrap"],

      description: "Controls how text wraps.",
    },

    truncate: {
      type: "boolean",

      description: "Truncates overflowing text with an ellipsis.",
    },
  },
} satisfies Skill;
