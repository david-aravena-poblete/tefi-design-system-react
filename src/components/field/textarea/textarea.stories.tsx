/* ======================================
   IMPORTS
====================================== */

import { Textarea } from "./Textarea";

import {
  STATES,
  SIZES,
} from "../../../shared/constants";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Field/Textarea",

  component: Textarea,

  args: {
    placeholder: "Write something...",
  },

  argTypes: {
    state: {
      control: "select",

      options: STATES,
    },

    textareaSize: {
      control: "select",

      options: SIZES,
    },
  },
};


/* ======================================
   PLAYGROUND
====================================== */

export const Playground = {};


/* ======================================
   DEFAULT
====================================== */

export const Default = {
  args: {
    state: "default",
  },
};


/* ======================================
   STATES
====================================== */

export const Error = {
  args: {
    state: "error",
  },
};


export const Success = {
  args: {
    state: "success",
  },
};


export const Warning = {
  args: {
    state: "warning",
  },
};


/* ======================================
   SIZES
====================================== */

export const Small = {
  args: {
    textareaSize: "sm",
  },
};


export const Medium = {
  args: {
    textareaSize: "md",
  },
};


export const Large = {
  args: {
    textareaSize: "lg",
  },
};


/* ======================================
   STATES
====================================== */

export const Disabled = {
  args: {
    disabled: true,
  },
};


export const Loading = {
  args: {
    loading: true,
  },
};