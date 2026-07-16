/* ======================================
   IMPORTS
====================================== */

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  NumberField,
} from "@/components/input/number-field";

import {
  FormField,
} from "@/components/form/form-field";

import {
  Label,
} from "@/components/field/label";

/* ======================================
   META
====================================== */

const meta: Meta<typeof NumberField> = {

  title: "Components/Input/NumberField",

  component: NumberField,

  tags: ["autodocs"],

};

export default meta;

type Story =
  StoryObj<typeof NumberField>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {

  render: (args) => (

    <NumberField {...args} />

  ),

};

/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {

  render: () => (

    <FormField>

      <Label>

        Quantity

      </Label>

      <NumberField
        placeholder="0"
      />

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

        <Label>

          Default

        </Label>

        <NumberField
          placeholder="100"
        />

      </FormField>

      <FormField>

        <Label>

          Error

        </Label>

        <NumberField
          state="error"
          placeholder="100"
        />

      </FormField>

      <FormField>

        <Label>

          Success

        </Label>

        <NumberField
          state="success"
          placeholder="100"
        />

      </FormField>

      <FormField>

        <Label>

          Disabled

        </Label>

        <NumberField
          disabled
          placeholder="100"
        />

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

      <NumberField
        size="sm"
        placeholder="Small"
      />

      <NumberField
        size="md"
        placeholder="Medium"
      />

      <NumberField
        size="lg"
        placeholder="Large"
      />

    </div>

  ),

};

/* ======================================
   WITH LIMITS
====================================== */

export const WithLimits: Story = {

  render: () => (

    <FormField>

      <Label>

        Age

      </Label>

      <NumberField
        min={18}
        max={99}
        placeholder="18"
      />

    </FormField>

  ),

};