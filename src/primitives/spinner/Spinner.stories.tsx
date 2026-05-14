import type {
    Meta,
    StoryObj,
  } from "@storybook/react";
  
  import { Spinner } from "./Spinner";
  
  import {
    SPINNER_SIZES,
  } from "./spinner.constants";
  
  /* ======================================
     META
  ====================================== */
  
  const meta = {
    title: "Primitives/Spinner",
  
    component: Spinner,
  
    argTypes: {
  
      size: {
        control: "select",
  
        options: SPINNER_SIZES,
      },
  
      className: {
        table: {
          disable: true,
        },
      },
    },
  } satisfies Meta<typeof Spinner>;
  
  export default meta;
  
  /* ======================================
     STORIES
  ====================================== */
  
  type Story = StoryObj<typeof meta>;
  
  export const Playground: Story = {
    args: {
      size: "md",
    },
  };
  
  export const Small: Story = {
    args: {
      size: "sm",
    },
  };
  
  export const Medium: Story = {
    args: {
      size: "md",
    },
  };
  
  export const Large: Story = {
    args: {
      size: "lg",
    },
  };