import { Grid } from "@/layouts";

import { Image } from "@/primitives/image";

/* ======================================
   IMAGE SKELETON
====================================== */

export function ImageSkeleton() {

  return (
    <div
      style={{
        maxWidth: "480px",
      }}
    >
      <Grid
        columns={3}
        gap="md"
      >

        {/* ======================================
           MANUAL SKELETON
        ====================================== */}

        <Image
          skeleton
          src="https://picsum.photos/600/600"
          ratio="1:1"
          alt="Square"
        />

        <Image
          skeleton
          src="https://picsum.photos/600/450"
          ratio="4:3"
          alt="Landscape"
        />

        <Image
          skeleton
          src="https://picsum.photos/600/338"
          ratio="16:9"
          alt="Wide"
        />

        {/* ======================================
           AUTO LOADING
        ====================================== */}

        <Image
          src="https://picsum.photos/600/600"
          ratio="1:1"
          alt="Square"
        />

        <Image
          src="https://picsum.photos/600/450"
          ratio="4:3"
          alt="Landscape"
        />

        <Image
          src="https://picsum.photos/600/338"
          ratio="16:9"
          alt="Wide"
        />

      </Grid>
    </div>
  );

}