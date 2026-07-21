/* ======================================
   IMPORTS
====================================== */

import React from "react";
import { FloatingSurface } from "./FloatingSurface";
import { OptionList } from "../../selection/option-list";

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
];

/* ======================================
   META
====================================== */

export default {
  title: "Components/Overlay/FloatingSurface",

  component: FloatingSurface,
};

/* ======================================
   DEFAULT
====================================== */

export function Default() {
  return (
    <div
      style={{
        position: "relative",

        width: "280px",

        paddingTop: "44px",
      }}
    >
      {/* TRIGGER */}

      <button
        style={{
          width: "100%",

          height: "44px",

          border: "1px solid #d1d5db",

          borderRadius: "6px",

          background: "white",

          textAlign: "left",

          padding: "0 12px",

          cursor: "pointer",
        }}
      >
        Select framework
      </button>

      {/* DROPDOWN */}

      <FloatingSurface open>
        <OptionList
          embedded

          options={OPTIONS}
        />
      </FloatingSurface>
    </div>
  );
}

/* ======================================
   CLOSED
====================================== */

export function Closed() {
  return (
    <div
      style={{
        position: "relative",

        width: "280px",

        paddingTop: "44px",
      }}
    >
      {/* TRIGGER */}

      <button
        style={{
          width: "100%",

          height: "44px",

          border: "1px solid #d1d5db",

          borderRadius: "6px",

          background: "white",

          textAlign: "left",

          padding: "0 12px",

          cursor: "pointer",
        }}
      >
        Select framework
      </button>

      {/* DROPDOWN */}

      <FloatingSurface>
        <OptionList
          embedded

          options={OPTIONS}
        />
      </FloatingSurface>
    </div>
  );
}
