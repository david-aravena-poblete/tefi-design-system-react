/* ======================================
   IMPORTS
====================================== */

import {
  useState,
} from "react";

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import {
  SearchField,
} from "@/components/input/search-field";

import {
  FormField,
} from "@/components/form/form-field";

import {
  Label,
} from "@/components/field/label";

/* ======================================
   META
====================================== */

const meta: Meta<typeof SearchField> = {

  title: "Components/Input/SearchField",

  component: SearchField,

  tags: ["autodocs"],

};

export default meta;

type Story =
  StoryObj<typeof SearchField>;

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {

  render: (args) => {

    const [value, setValue] =
      useState("");

    return (

      <SearchField
        {...args}
        value={value}
        onChange={(event) => {

          setValue(
            event.target.value,
          );

        }}
      />

    );

  },

};

/* ======================================
   DEFAULT
====================================== */

export const Default: Story = {

  render: () => {

    const [value, setValue] =
      useState("");

    return (

      <FormField>

        <Label>

          Search

        </Label>

        <SearchField
          value={value}
          onChange={(event) => {

            setValue(
              event.target.value,
            );

          }}
          placeholder="Search products..."
        />

      </FormField>

    );

  },

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

      <SearchField
        size="sm"
        placeholder="Small"
      />

      <SearchField
        size="md"
        placeholder="Medium"
      />

      <SearchField
        size="lg"
        placeholder="Large"
      />

    </div>

  ),

};

/* ======================================
   DISABLED
====================================== */

export const Disabled: Story = {

  render: () => (

    <SearchField
      disabled
      value="Search disabled"
    />

  ),

};

/* ======================================
   WITHOUT CLEAR
====================================== */

export const WithoutClear: Story = {

  render: () => (

    <SearchField
      clearable={false}
      placeholder="Search without clear"
    />

  ),

};