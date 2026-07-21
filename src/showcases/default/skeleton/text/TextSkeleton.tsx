import { Grid } from "@/layouts";

import { Text } from "@/components/typography";

/* ======================================
   TEXT SKELETON
====================================== */

export function TextSkeleton() {
  return (
    <Grid columns={2} gap="xl">
      {/* ======================================
         DEFAULT
      ====================================== */}

      <Text skeleton>Lorem ipsum dolor sit amet.</Text>

      <Text>Lorem ipsum dolor sit amet.</Text>

      {/* ======================================
         SHORT
      ====================================== */}

      <Text skeleton>Texto corto.</Text>

      <Text>Texto corto.</Text>

      {/* ======================================
         MEDIUM
      ====================================== */}

      <Text skeleton>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

      {/* ======================================
         SIZE
      ====================================== */}

      <Text skeleton size="sm">
        Small text
      </Text>

      <Text size="sm">Small text</Text>

      <Text skeleton size="md">
        Medium text
      </Text>

      <Text size="md">Medium text</Text>

      {/* ======================================
         LONG TEXT
      ====================================== */}

      <Text skeleton>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    </Grid>
  );
}
