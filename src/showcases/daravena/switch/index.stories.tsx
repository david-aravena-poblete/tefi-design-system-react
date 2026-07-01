import type {
    Meta,
    StoryObj,
  } from "@storybook/react";
  
  import SwitchShowcase from "./index";
  
  const meta: Meta<typeof SwitchShowcase> = {
    title: "Showcases/Switch",
    component: SwitchShowcase,
  };
  
  export default meta;
  
  type Story =
    StoryObj<typeof SwitchShowcase>;
  
  export const Default: Story = {};