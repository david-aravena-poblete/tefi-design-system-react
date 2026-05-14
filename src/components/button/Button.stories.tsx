import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  Search,
  ArrowRight,
} from "lucide-react";

import { Button } from "./Button";

import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
} from "./button.constants";

import { Icon } from "../../primitives/icon";

/* ======================================
   META
====================================== */

const meta = {
  title: "Components/Button",

  component: Button,

  argTypes: {

    variant: {
      control: "select",

      options: BUTTON_VARIANTS,
    },

    size: {
      control: "select",

      options: BUTTON_SIZES,
    },

    fullWidth: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    loading: {
      control: "boolean",
    },

    children: {
      control: "text",
    },

    iconLeft: {
      table: {
        disable: true,
      },
    },

    iconRight: {
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
} satisfies Meta<typeof Button>;

export default meta;

/* ======================================
   STORIES
====================================== */

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Hola Tefi",

    variant: "primary",
    size: "md",

    disabled: false,
    loading: false,
    fullWidth: false,
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    variant: "danger",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

export const Loading: Story = {
  args: {
    children: "Guardando",
    loading: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: "Buscar",

    iconLeft: (
      <Icon>
        <Search />
      </Icon>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Continuar",

    iconRight: (
      <Icon>
        <ArrowRight />
      </Icon>
    ),
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width",
    fullWidth: true,
  },
};