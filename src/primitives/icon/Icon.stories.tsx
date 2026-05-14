import type {
    Meta,
    StoryObj,
  } from "@storybook/react";
  
  import {
    Search,
    X,
  } from "lucide-react";
  
  import { Icon } from "./Icon";
  
  import {
    ICON_SIZES,
  } from "./icon.constants";
  
  /* ======================================
     META
  ====================================== */
  
  const meta = {
    title: "Primitives/Icon",
  
    component: Icon,
  
    argTypes: {
  
      size: {
        control: "select",
  
        options: ICON_SIZES,
      },
  
      name: {
        control: "select",
  
        options: [
          "search",
          "plus",
          "close",
        ],
      },
  
      children: {
        table: {
          disable: true,
        },
      },
  
      className: {
        table: {
          disable: true,
        },
      },
    },
  } satisfies Meta<typeof Icon>;
  
  export default meta;
  
  /* ======================================
     STORIES
  ====================================== */
  
  type Story = StoryObj<typeof meta>;
  
  export const Playground: Story = {
    args: {
      size: "md",
      name: "search",
    },
  };
  
  export const RegistryIcon: Story = {
    args: {
      size: "md",
      name: "plus",
    },
  };
  
  export const ChildrenIcon: Story = {
    render: (args) => (
      <Icon {...args}>
        <Search />
      </Icon>
    ),
  
    args: {
      size: "md",
    },
  };
  
  export const CloseIcon: Story = {
    render: (args) => (
      <Icon {...args}>
        <X />
      </Icon>
    ),
  
    args: {
      size: "lg",
    },
  };