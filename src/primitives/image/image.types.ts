import type {
    ImgHTMLAttributes,
  } from "react";
  
  /* ======================================
     IMAGE FIT
  ====================================== */
  
  export type ImageFit =
    | "cover"
    | "contain";
  
  /* ======================================
     IMAGE RATIO
  ====================================== */
  
  export type ImageRatio =
    | "1:1"
    | "4:3"
    | "16:9";
  
  /* ======================================
     IMAGE PROPS
  ====================================== */
  
  export interface ImageProps
    extends ImgHTMLAttributes<HTMLImageElement> {
  
    fit?: ImageFit;
  
    ratio?: ImageRatio;

    skeleton?: boolean;
    
  }