/* ======================================
   IMPORTS
====================================== */

import React from "react";

import { Select }
  from "./Select";

import {
  STATES,
  SIZES,
} from "../../../shared/constants";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Selection/Select",

  component: Select,

  argTypes: {
    state: {
      control: "select",

      options: STATES,
    },

    selectSize: {
      control: "select",

      options: SIZES,
    },
  },
};


/* ======================================
   PLAYGROUND
====================================== */

export const Playground = {
  args: {
    children: (
      <>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </>
    ),
  },
};


/* ======================================
   DEFAULT
====================================== */

export const Default = {
  args: {
    children: (
      <>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </>
    ),
  },
};


/* ======================================
   STATES
====================================== */

export const Error = {
  args: {
    state: "error",

    children: (
      <>
        <option>Option 1</option>
        <option>Option 2</option>
      </>
    ),
  },
};


export const Success = {
  args: {
    state: "success",

    children: (
      <>
        <option>Option 1</option>
        <option>Option 2</option>
      </>
    ),
  },
};


export const Warning = {
  args: {
    state: "warning",

    children: (
      <>
        <option>Option 1</option>
        <option>Option 2</option>
      </>
    ),
  },
};


/* ======================================
   SIZES
====================================== */

export const Small = {
  args: {
    selectSize: "sm",

    children: (
      <>
        <option>Option 1</option>
      </>
    ),
  },
};


export const Medium = {
  args: {
    selectSize: "md",

    children: (
      <>
        <option>Option 1</option>
      </>
    ),
  },
};


export const Large = {
  args: {
    selectSize: "lg",

    children: (
      <>
        <option>Option 1</option>
      </>
    ),
  },
};


/* ======================================
   DISABLED
====================================== */

export const Disabled = {
  args: {
    disabled: true,

    children: (
      <>
        <option>Option 1</option>
      </>
    ),
  },
};


/* ======================================
   LOADING
====================================== */

export const Loading = {
  args: {
    loading: true,

    children: (
      <>
        <option>Option 1</option>
      </>
    ),
  },
};