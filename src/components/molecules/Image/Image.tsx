import { Wrapper } from "@/components/atoms";
import useImage from "@/hooks/useImage";
import styles from './Image.module.scss';
import { ImageProps } from "./ImageProps";

export default function Image(props: Readonly<ImageProps>) {
  const {
    loading = 'lazy',
    decoding = 'async',
    figureProps,
    caption,
    sources,
    height,
    width,
    server,
    ...rest
  } = props

  const {
    imageSource,
    handleLoad,
    handleSetSizes,
    handleSrcSets,
    Placeholder
  } = useImage(props)

  return (
    <Wrapper element="figure" aria-label="figure" className={styles.figure} {...figureProps}>
      <Placeholder />
      <picture>
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
          {...rest}
          src={imageSource}
          onLoad={handleLoad}
          height={height}
          width={width}
          loading={loading}
          decoding={decoding}
        />
      </picture>
      {caption && <figcaption>{caption}</figcaption>}
    </Wrapper>
  )
}
