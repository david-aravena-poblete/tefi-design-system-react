import type {
   Meta,
   StoryObj,
 } from "@storybook/react";
 
 import { ImageSkeleton } from "./ImageSkeleton";
 
 /* ======================================
    META
 ====================================== */
 
 const meta = {
   title: "Showcases/Default/Skeleton/Image",
 
   component: ImageSkeleton,
 } satisfies Meta<typeof ImageSkeleton>;
 
 export default meta;
 
 /* ======================================
    STORIES
 ====================================== */
 
 type Story = StoryObj<typeof meta>;
 
 export const Default: Story = {};