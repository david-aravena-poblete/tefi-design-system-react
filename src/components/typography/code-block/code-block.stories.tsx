import type { Meta, StoryObj } from "@storybook/react";

import { CodeBlock } from "./CodeBlock";

export default {
  title: "Components/Typography/CodeBlock",
  component: CodeBlock,
  args: {
    children: `export function Button() {
  return (
    <button>
      Guardar
    </button>
  );
}`,
  },
} satisfies Meta<typeof CodeBlock>;

type Story = StoryObj<typeof CodeBlock>;

export const Playground: Story = {};

export const JavaScript: Story = {
  args: {
    children: `const validate = (value) => {
  return value.trim().length > 0;
};`,
  },
};

export const TypeScript: Story = {
  args: {
    children: `interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export function Button({
  children,
  disabled,
}: ButtonProps) {
  return (
    <button disabled={disabled}>
      {children}
    </button>
  );
}`,
  },
};