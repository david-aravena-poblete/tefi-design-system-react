/* ======================================
   IMPORTS
====================================== */

import React, { useState } from "react";
import { Combobox } from "./Combobox";

/* ======================================
   OPTIONS
====================================== */

const OPTIONS = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Vue",
    value: "vue",
  },
  {
    label: "Angular",
    value: "angular",
  },
  {
    label: "Svelte",
    value: "svelte",
  },
];

/* ======================================
   WRAPPER
====================================== */

function StoryWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",

        maxWidth: "480px",
      }}
    >
      {children}
    </div>
  );
}

/* ======================================
   META
====================================== */

export default {
  title: "Components/Selection/Combobox",

  component: Combobox,

  parameters: {
    layout: "padded",
  },
};

/* ======================================
   SINGLE
====================================== */

export function Single() {
  const [value, setValue] = useState("");

  return (
    <StoryWrapper>
      <Combobox
        variant="single"

        value={value}

        options={OPTIONS}

        placeholder="Select framework"

        onChange={(next) => setValue(next as string)}
      />
    </StoryWrapper>
  );
}

/* ======================================
   MULTIPLE
====================================== */

export function Multiple() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <StoryWrapper>
      <Combobox
        variant="multiple"

        value={value}

        options={OPTIONS}

        placeholder="Search frameworks"

        onChange={(next) => setValue(next as string[])}
      />
    </StoryWrapper>
  );
}

/* ======================================
   DISABLED
====================================== */

export function Disabled() {
  return (
    <StoryWrapper>
      <Combobox
        disabled

        variant="multiple"

        options={OPTIONS}

        placeholder="Disabled combobox"
      />
    </StoryWrapper>
  );
}

/* ======================================
   ERROR
====================================== */

export function Error() {
  return (
    <StoryWrapper>
      <Combobox
        state="error"

        variant="single"

        options={OPTIONS}

        placeholder="Select framework"
      />
    </StoryWrapper>
  );
}
