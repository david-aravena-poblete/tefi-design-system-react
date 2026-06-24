import type {
    Meta,
    StoryObj,
  } from "@storybook/react";
  
  import {
    HeroShowcase,
  } from "./HeroShowcase";
  
  const meta: Meta<
    typeof HeroShowcase
  > = {
  
    title:
      "Showcases/Daravena/Hero",
  
    component:
      HeroShowcase,
  
  };
  
  export default meta;
  
  type Story =
    StoryObj<
      typeof HeroShowcase
    >;
  
  export const Default:
    Story = {};