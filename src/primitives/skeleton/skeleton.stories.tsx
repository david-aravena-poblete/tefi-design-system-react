import type {
    Meta,
    StoryObj,
  } from "@storybook/react";
  
  import { Skeleton } from "./Skeleton";
  
  /* ======================================
     META
  ====================================== */
  
  const meta: Meta<typeof Skeleton> = {
    title: "Primitives/Skeleton",
  
    component: Skeleton,
  
    tags: ["autodocs"],
  };
  
  export default meta;
  
  type Story =
    StoryObj<typeof Skeleton>;
  
  /* ======================================
     STORIES
  ====================================== */
  
  export const Default: Story = {};
  
  export const Text: Story = {
    args: {
      width: "200px",
      height: "16px",
    },
  };
  
  export const Title: Story = {
    args: {
      width: "300px",
      height: "32px",
    },
  };
  
  export const Image: Story = {
    args: {
      width: "100%",
      height: "300px",
    },
  };
  
  export const Avatar: Story = {
    args: {
      width: "64px",
      height: "64px",
      radius: "50%",
    },
  };
  
  export const Static: Story = {
    args: {
      width: "300px",
      height: "32px",
      animated: false,
    },
  };