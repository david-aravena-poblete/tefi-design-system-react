import type {
    Meta,
    StoryObj,
  } from "@storybook/react";
  
  import { SkillsPage } from "./SkillsPage";
  
  const meta: Meta<typeof SkillsPage> = {
    title: "Showcases/Daravena/Skills",
    component: SkillsPage,
  };
  
  export default meta;
  
  type Story = StoryObj<typeof SkillsPage>;
  
  export const Default: Story = {};