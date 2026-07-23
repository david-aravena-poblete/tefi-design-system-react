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
  return <Heading>Heading</Heading>;
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
      <Heading as="h1">Heading 1</Heading>

      <Heading as="h2">Heading 2</Heading>

      <Heading as="h3">Heading 3</Heading>

      <Heading as="h4">Heading 4</Heading>

      <Heading as="h5">Heading 5</Heading>

      <Heading as="h6">Heading 6</Heading>
    </div>
  );
}
