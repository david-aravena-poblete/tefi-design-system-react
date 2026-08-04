/* ======================================
   IMPORTS
====================================== */

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { htmlSkill } from "@/laboratory/capabilities/html";
import { interactionSkill } from "@/laboratory/capabilities/interaction";
import { layoutSkill } from "@/laboratory/capabilities/layout";
import { surfaceSkill } from "@/laboratory/capabilities/surface";
import { typographySkill } from "@/laboratory/capabilities/typography";

import { createStory } from "@/laboratory/storybook";

import { Button } from "./Button";

/* ======================================
   STORY
====================================== */

const story = createStory({
  skills: [
    htmlSkill,
    layoutSkill,
    typographySkill,
    surfaceSkill,
    interactionSkill,
  ],

  controls: {
    html: [
      "as",
    ],

    surface: [
      "background",
    ],
  },

  args: {
    children: "Click me",

    as: "button",

    display: "flex",
    direction: "row",
    align: "center",
    justify: "center",
    insideX: "md",
    insideY: "sm",
    minHeight: "40",

    variant: "body-md",
    weight: "medium",

    background: "blue",
    text: "white",
    radius: "md",

    hover: {
      background: "blue-soft",
    },

    press: "move",
    focusRing: "blue",
    transition: "fast",
  },
});

/* ======================================
   META
====================================== */

const meta = {
  title: "Laboratory/Components/Button",

  component: Button,

  ...story,

  render: (args) => (
    <Button
      {...story.transformArgs(args)}
    />
  ),
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   STORIES
====================================== */

export const Playground: Story = {};