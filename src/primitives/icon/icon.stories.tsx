import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { Icon } from "./Icon";

const meta = {
  title: "Primitives/Icon",
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};