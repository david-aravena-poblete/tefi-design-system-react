import { Grid } from "@/layouts";

import { Heading } from "@/components/typography";

/* ======================================
   HEADING SKELETON
====================================== */

export function HeadingSkeleton() {
  return (
    <Grid columns={2} gap="xl">
      {/* ======================================
         H1
      ====================================== */}

      <Heading skeleton as="h1">
        Heading level 1
      </Heading>

      <Heading as="h1">Heading level 1</Heading>

      {/* ======================================
         H2
      ====================================== */}

      <Heading skeleton as="h2">
        Heading level 2
      </Heading>

      <Heading as="h2">Heading level 2</Heading>

      {/* ======================================
         H3
      ====================================== */}

      <Heading skeleton as="h3">
        Heading level 3
      </Heading>

      <Heading as="h3">Heading level 3</Heading>

      {/* ======================================
         H4
      ====================================== */}

      <Heading skeleton as="h4">
        Heading level 4
      </Heading>

      <Heading as="h4">Heading level 4</Heading>

      {/* ======================================
         H5
      ====================================== */}

      <Heading skeleton as="h5">
        Heading level 5
      </Heading>

      <Heading as="h5">Heading level 5</Heading>

      {/* ======================================
         H6
      ====================================== */}

      <Heading skeleton as="h6">
        Heading level 6
      </Heading>

      <Heading as="h6">Heading level 6</Heading>
    </Grid>
  );
}
