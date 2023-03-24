import { Wrapper } from "@/components/atoms";
import { defaultBlurConfig, initialBlurConfig } from "@/constants/images";
import { useState } from "react";
import { BlurOptions, ImageProps, MimeTypes, Sizes, SrcSet } from "./ImageProps";

function handleBlurOptions(blurOpt?: BlurOptions | 'none'): BlurOptions {  
  if (blurOpt === 'none') {
    return initialBlurConfig
  }

  if (blurOpt) {
    return blurOpt
  }

  return defaultBlurConfig
}

const baseURL = import.meta.env.VITE_BASE_IMAGE_URL

export default function Image(props: ImageProps) {
  const {
    src,
    loading = 'lazy',
    decoding = 'async',
    blurOptions,
    figureProps,
    caption,
    sources,
    height,
    width,
    type,
    ...imageProps
  } = props

  const [blur, setBlur] = useState(handleBlurOptions(blurOptions))

  function handleBlur() {
    setBlur(initialBlurConfig)
  }

  function handleSrcSets(srcSets: SrcSet[], type: MimeTypes): string {
    let blurType: string | undefined = ''

    if (blurOptions) {
      blurType = blur[type]
    }
    
    const setsList = srcSets.map(set => `${baseURL}/${blurType}${set.src} ${set.size}`)
    const sets = setsList.join(', ')
  
    return sets
  }
  
  function handleSetSizes(setSizes: Sizes[]): string {
    const setsList = setSizes.map(set => `${set.condition} ${set.size}`)
    const sets = setsList.join(', ')
    return sets
  }

  return (
    <Wrapper element="figure" {...figureProps}>
      <picture aria-label="picture">
        {sources?.map(source => {
          return (
            <source
              key={handleSrcSets(source.srcSets, source.type)}
              srcSet={handleSrcSets(source.srcSets, source.type)}
              sizes={handleSetSizes(source.srcSetSizes)}
              type={`image/${source.type}`}
              height={height}
              width={width}
            />
          )
        })}
        <img
          src={`${baseURL}/${blur[type || 'png']}${src}`}
          onLoad={handleBlur}
          height={height}
          width={width}
          {...imageProps}
        />
      </picture>
      {caption && <figcaption>{caption}</figcaption>}
    </Wrapper>
  )
}
