export interface ImageProps extends NativeImage {
  figureProps?: NativeElement
  blurOptions?: BlurOptions | 'none'
  sources?: Source[]
  caption?: string
  type?: MimeTypes
  server?: boolean
}

export type Source = {
  srcSets: SrcSet[]
  srcSetSizes: Sizes[]
  type: MimeTypes
}

export type SrcSet = {
  src: string
  size: string
}

export type Sizes = {
  condition: string
  size: string
}

export type SimpleImage = {
  src: string
  alt: string
}

export type MimeTypes = 'avif' | 'webp' | 'png' | 'jpeg' | 'svg+xml'

export type BlurOptions = {
  avif?: string
  webp?: string
  jpeg?: string
  png?: string
  ['svg+xml']?: string
}
