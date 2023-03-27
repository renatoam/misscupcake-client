import { ImagePlaceholder } from "@/components/molecules"
import { BlurOptions, ImageProps, MimeTypes, Sizes, SrcSet } from "@/components/molecules/Image/ImageProps"
import { defaultBlurConfig, initialBlurConfig } from "@/constants/images"
import { useState } from "react"

const useImage = (props: ImageProps) => {
  const {
    blurOptions,
    server,
    src,
    type
  } = props
  
  const [blur, setBlur] = useState(handleBlurOptions())
  const [imageStatus, setImageStatus] = useState('loading')
  
  const baseURL = server ? '' : import.meta.env.VITE_BASE_IMAGE_URL
  const imageSource = server ? src : `${baseURL}/${blur[type || 'png']}${src}`

  function handleBlurOptions(): BlurOptions {
    if (blurOptions === 'none') {
      return initialBlurConfig
    }
  
    if (blurOptions) {
      return blurOptions
    }
  
    return defaultBlurConfig
  }
  
  function handleLoad() {
    setBlur(initialBlurConfig)
    server && setImageStatus('')
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

  function Placeholder() {
    if (server) {
      return <ImagePlaceholder imageStatus={imageStatus} />
    }

    return <></>
  }

  return {
    imageSource,
    handleLoad,
    handleSrcSets,
    handleSetSizes,
    Placeholder
  }
}

export default useImage
