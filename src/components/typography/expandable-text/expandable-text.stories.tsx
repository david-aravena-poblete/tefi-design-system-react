import React from "react";

import type {
    Meta,
    StoryObj,
  } from "@storybook/react";
  
  import {
    ExpandableText,
  } from "./ExpandableText";
  
  const meta: Meta<
    typeof ExpandableText
  > = {
    title:
      "Components/Typography/ExpandableText",
  
    component:
      ExpandableText,
  };
  
  export default meta;
  
  type Story =
    StoryObj<
      typeof ExpandableText
    >;
  
  export const Default: Story = {
    render: () => (
  
      <ExpandableText
        lines={4}
      >
  
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
  
        Sed do eiusmod tempor
        incididunt ut labore et
        dolore magna aliqua.
  
        Ut enim ad minim veniam,
        quis nostrud exercitation
        ullamco laboris nisi ut
        aliquip ex ea commodo
        consequat.
  
        Duis aute irure dolor in
        reprehenderit in voluptate
        velit esse cillum dolore eu
        fugiat nulla pariatur.
  
        Excepteur sint occaecat
        cupidatat non proident.
  
      </ExpandableText>
  
    ),
  };