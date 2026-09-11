import type {
    ComponentPropsWithoutRef,
    ReactNode,
  } from "react";
  
  export type CodeBlockProps = {
    children?: ReactNode;
  } & ComponentPropsWithoutRef<"pre">;