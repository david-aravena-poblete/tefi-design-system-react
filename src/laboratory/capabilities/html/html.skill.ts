/* ======================================
   IMPORTS
====================================== */

import type { Skill } from "@/laboratory/skill";

/* ======================================
   SKILL
====================================== */

export const htmlSkill = {
  name: "HTML",

  namespace: "html",

  description:
    "Defines the semantic HTML element rendered by a component.",

  props: {
    as: {
      type: "select",

      options: [
        "div",
        "span",
        "p",
        "label",
        "strong",
        "small",
        "section",
        "article",
        "header",
        "footer",
        "main",
        "nav",
        "aside",
        "button",
      ],

      description:
        "HTML element rendered by the component.",
    },
  },
} satisfies Skill;