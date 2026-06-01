import React from "react";

import { Heading } from "./Heading";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Heading",

  component: Heading,
};


/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (
    <Heading>
      Heading
    </Heading>
  );
}


/* ======================================
   LEVELS
====================================== */

export function Levels() {

  return (
    <div
      style={{
        display: "grid",
        gap: "12px",
      }}
    >

      <Heading level={1}>
        Heading 1
      </Heading>

      <Heading level={2}>
        Heading 2
      </Heading>

      <Heading level={3}>
        Heading 3
      </Heading>

      <Heading level={4}>
        Heading 4
      </Heading>

      <Heading level={5}>
        Heading 5
      </Heading>

      <Heading level={6}>
        Heading 6
      </Heading>

    </div>
  );
}