/* ======================================
   IMPORTS
====================================== */

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  Field,
} from "@/components/field";

import {
  Input,
} from "@/components/input";

/* ======================================
   META
====================================== */

const meta: Meta<typeof Field> = {

  title: "Components/Field/Field",

  component: Field,

  tags: ["autodocs"],

};

export default meta;

type Story =
  StoryObj<typeof Field>;

/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {

  render: () => (

    <Field>

      <Field.Label>

        Name

      </Field.Label>

      <Input
        placeholder="Enter your name"
      />

      <Field.HelperText>

        This field is required.

      </Field.HelperText>

    </Field>

  ),

};

/* ======================================
   ERROR
====================================== */

export const Error: Story = {

  render: () => (

    <Field>

      <Field.Label>

        Email

      </Field.Label>

      <Input
        placeholder="Enter your email"
      />

      <Field.ErrorMessage>

        Invalid email address.

      </Field.ErrorMessage>

    </Field>

  ),

};

/* ======================================
   HELPER + ERROR
====================================== */

export const HelperAndError: Story = {

  render: () => (

    <Field>

      <Field.Label>

        Password

      </Field.Label>

      <Input
        type="password"
        placeholder="Enter your password"
      />

      <Field.HelperText>

        Minimum 8 characters.

      </Field.HelperText>

      <Field.ErrorMessage>

        Password is too short.

      </Field.ErrorMessage>

    </Field>

  ),

};

/* ======================================
   WITHOUT LABEL
====================================== */

export const WithoutLabel: Story = {

  render: () => (

    <Field>

      <Input
        placeholder="Search..."
      />

    </Field>

  ),

};