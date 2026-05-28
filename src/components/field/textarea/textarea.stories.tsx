/* ======================================
   IMPORTS
====================================== */

import { Textarea } from "./Textarea";

import {
  FIELD_STATES,
  FIELD_SIZES,
} from "../../../shared/field.constants";

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

      options: FIELD_STATES,
    },

    textareaSize: {
      control: "select",

      options: FIELD_SIZES,
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