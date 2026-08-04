/* ======================================
   IMPORTS
====================================== */

import type {
    Meta,
    StoryObj,
  } from "@storybook/react";
  
  import { Heading } from "./Heading";
  
  /* ======================================
     META
  ====================================== */
  
  const meta = {
    title: "Laboratory/Components/Heading",
  
    component: Heading,
  
    args: {
      children: "Hello Design System 👋",
  
      as: "h2",
  
      typography: {
        variant: "heading-md",
        align: "center",
      },
  
      surface: {
        text: "blue",
      },
    },
  } satisfies Meta<typeof Heading>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  /* ======================================
     STORIES
  ====================================== */
  
  export const Playground: Story = {};