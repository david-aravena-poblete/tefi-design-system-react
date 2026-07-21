/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { PasswordField } from "@/components/input/password-field";

import { FormField } from "@/components/form/form-field";

import { Label } from "@/components/field/label";

/* ======================================
   META
====================================== */

const meta: Meta<typeof PasswordField> = {
  title: "Components/Input/PasswordField",

  component: PasswordField,

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PasswordField>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {
  render: (args) => <PasswordField {...args} />,
};

/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {
  render: () => (
    <FormField>
      <Label>Password</Label>

      <PasswordField placeholder="••••••••" />
    </FormField>
  ),
};

/* ======================================
   STATES
====================================== */

export const States: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <FormField>
        <Label>Default</Label>

        <PasswordField placeholder="Default state" />
      </FormField>

      <FormField>
        <Label>Error</Label>

        <PasswordField state="error" placeholder="Error state" />
      </FormField>

      <FormField>
        <Label>Success</Label>

        <PasswordField state="success" placeholder="Success state" />
      </FormField>

      <FormField>
        <Label>Disabled</Label>

        <PasswordField disabled placeholder="Disabled state" />
      </FormField>
    </div>
  ),
};

/* ======================================
   SIZES
====================================== */

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <PasswordField size="sm" placeholder="Small" />

      <PasswordField size="md" placeholder="Medium" />

      <PasswordField size="lg" placeholder="Large" />
    </div>
  ),
};
