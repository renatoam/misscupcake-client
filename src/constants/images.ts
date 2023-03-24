import { BlurOptions, SimpleImage, Source } from "@/components/molecules/Image/ImageProps";

export const avifSet: Source = {
  type: 'avif',
  srcSets: [
    {
      src: 'cupcake/hero-image-mob-avif.avif',
      size: '600w'
    },
    {
      src: 'cupcake/hero-image-tab-avif.avif',
      size: '960w'
    },
    {
      src: 'cupcake/hero-image-desk-avif.avif',
      size: '1600w'
    },
  ],
  srcSetSizes: [
    {
      condition: '(max-width: 600px)',
      size: '600px'
    },
    {
      condition: '(max-width: 1024px)',
      size: '960px'
    },
    {
      condition: '(min-width: 1025px)',
      size: '1600px'
    },
  ],
}

export const webpSet: Source = {
  type: 'webp',
  srcSets: [
    {
      src: 'cupcake/hero-image-mob-webp.webp',
      size: '600w'
    },
    {
      src: 'cupcake/hero-image-tab-webp.webp',
      size: '960w'
    },
    {
      src: 'cupcake/hero-image-desk-webp.webp',
      size: '1600w'
    },
  ],
  srcSetSizes: [
    {
      condition: '(max-width: 600px)',
      size: '600px'
    },
    {
      condition: '(max-width: 1024px)',
      size: '960px'
    },
    {
      condition: '(min-width: 1025px)',
      size: '1600px'
    },
  ],
}

export const sources: Source[] = [avifSet, webpSet]
export const heroFallback: SimpleImage = {
  src: 'cupcake/hero-image-desk-png.png',
  alt: 'Cupcakes falling'
}

export const defaultBlurConfig: BlurOptions = {
  avif: 'w_430/e_blur:1000,q_1,f_avif/',
  webp: 'w_430/e_blur:1000,q_1,f_webp/',
  jpeg: 'w_430/e_blur:1000,q_1,f_jpg/',
  png: 'w_430/e_blur:1000,q_1,f_png/',
  "svg+xml": '',
}

export const initialBlurConfig: BlurOptions = {
  avif: '',
  webp: '',
  png: '',
  jpeg: '',
  "svg+xml": ''
}
