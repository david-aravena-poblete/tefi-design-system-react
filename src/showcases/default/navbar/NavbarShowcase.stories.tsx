import type {
    Meta,
    StoryObj,
  } from "@storybook/react";
  
  import {
    NavbarShowcase,
  } from "./NavbarShowcase";
  
  const meta: Meta<typeof NavbarShowcase> = {
    title: "Showcases/Default/Navbar",
    component: NavbarShowcase,
    parameters: {
      layout: "fullscreen",
    },
  };
  
  export default meta;
  
  type Story =
    StoryObj<typeof NavbarShowcase>;
  
  export const Default: Story = {};