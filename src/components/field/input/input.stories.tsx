/* ======================================
   IMPORTS
====================================== */

import React from "react";

import {
  Search,
  Mail,
  Eye,
} from "lucide-react";

import { Input }
  from "./Input";

import {
  STATES,
  SIZES,
} from "../../../shared/constants";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Field/Input",

  component: Input,

  parameters: {
    layout: "padded",
  },

  args: {
    placeholder:
      "Write something...",
  },

  argTypes: {
    state: {
      control: "select",

      options:
        STATES,
    },

    inputSize: {
      control: "select",

      options:
        SIZES,
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
   PREFIX
====================================== */

export const Prefix = {
  args: {
    placeholder:
      "Search products...",

    startIcon:
      <Search size={16} />,
  },
};


/* ======================================
   SUFFIX
====================================== */

export const Suffix = {
  args: {
    placeholder:
      "Enter email...",

    endIcon:
      <Mail size={16} />,
  },
};


/* ======================================
   PREFIX + SUFFIX
====================================== */

export const PrefixAndSuffix = {
  args: {
    placeholder:
      "Search users...",

    startIcon:
      <Search size={16} />,

    endIcon:
      <Eye size={16} />,
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
    inputSize: "sm",
  },
};


export const Medium = {
  args: {
    inputSize: "md",
  },
};


export const Large = {
  args: {
    inputSize: "lg",
  },
};


/* ======================================
   DISABLED
====================================== */

export const Disabled = {
  args: {
    disabled: true,
  },
};


/* ======================================
   LOADING
====================================== */

export const Loading = {
  args: {
    loading: true,
  },
};