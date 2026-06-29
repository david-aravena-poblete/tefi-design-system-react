import { Grid } from "@/layouts";

import { Heading } from "@/components/typography";

/* ======================================
   HEADING SKELETON
====================================== */

export function HeadingSkeleton() {

  return (

    <Grid
      columns={2}
      gap="xl"
    >

      {/* ======================================
         H1
      ====================================== */}

      <Heading
        skeleton
        level={1}
      >
        Heading level 1
      </Heading>

      <Heading level={1}>
        Heading level 1
      </Heading>

      {/* ======================================
         H2
      ====================================== */}

      <Heading
        skeleton
        level={2}
      >
        Heading level 2
      </Heading>

      <Heading level={2}>
        Heading level 2
      </Heading>

      {/* ======================================
         H3
      ====================================== */}

      <Heading
        skeleton
        level={3}
      >
        Heading level 3
      </Heading>

      <Heading level={3}>
        Heading level 3
      </Heading>

      {/* ======================================
         H4
      ====================================== */}

      <Heading
        skeleton
        level={4}
      >
        Heading level 4
      </Heading>

      <Heading level={4}>
        Heading level 4
      </Heading>

      {/* ======================================
         H5
      ====================================== */}

      <Heading
        skeleton
        level={5}
      >
        Heading level 5
      </Heading>

      <Heading level={5}>
        Heading level 5
      </Heading>

      {/* ======================================
         H6
      ====================================== */}

      <Heading
        skeleton
        level={6}
      >
        Heading level 6
      </Heading>

      <Heading level={6}>
        Heading level 6
      </Heading>

    </Grid>

  );

}