import React from "react";
import { Card } from "./Card";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Card",

  component: Card,
};


/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (
    <Card>

      <Card.Header>
        Header
      </Card.Header>

      <Card.Body>
        Body content
      </Card.Body>

      <Card.Footer>
        Footer
      </Card.Footer>

    </Card>
  );
}


/* ======================================
   VARIANTS
====================================== */

export function Variants() {

  return (
    <div
      style={{
        display: "grid",
        gap: "16px",
      }}
    >

      <Card variant="outlined">
        <Card.Body>
          Outlined
        </Card.Body>
      </Card>

      <Card variant="elevated">
        <Card.Body>
          Elevated
        </Card.Body>
      </Card>

      <Card variant="flat">
        <Card.Body>
          Flat
        </Card.Body>
      </Card>

    </div>
  );
}


/* ======================================
   SIZES
====================================== */

export function Sizes() {

  return (
    <div
      style={{
        display: "grid",
        gap: "16px",
      }}
    >

      <Card size="sm">
        <Card.Body>
          Small
        </Card.Body>
      </Card>

      <Card size="md">
        <Card.Body>
          Medium
        </Card.Body>
      </Card>

      <Card size="lg">
        <Card.Body>
          Large
        </Card.Body>
      </Card>

    </div>
  );
}


/* ======================================
   SECTIONS
====================================== */

export function Sections() {

  return (
    <Card>

      <Card.Header>
        Header
      </Card.Header>

      <Card.Body>
        Body content
      </Card.Body>

      <Card.Footer>
        Footer
      </Card.Footer>

    </Card>
  );
}