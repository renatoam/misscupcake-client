import { useEffect, useRef, useState } from 'react'
import styles from './Wave.module.scss'

type CSSColors = 'red' | 'yellow' | 'green' | 'cyan' | 'blue' | 'magenta'

interface WaveProps {
  color?: CSSColors | number
  saturate?: number
} 

export default function Wave(props: WaveProps) {
  const { color = 'yellow', saturate = 1 } = props

  const waveRef = useRef<HTMLElement>(null)
  const [top, setTop] = useState(0)

  useEffect(() => {
    const previousElement = waveRef.current?.previousSibling as HTMLElement
    if (waveRef.current) {
      const newTop = previousElement?.getBoundingClientRect()?.bottom + 1
      setTop(newTop)
    }
  }, [waveRef])

  // since the original image is yellow, we need to discount from the yellow position
  // on the CSS color wheel. CSS Color Wheel originally starts with red: 0.
  const YELLOW_DISCOUNT = 60
  const cssColorWheel = {
    red: 0,
    yellow: 60,
    green: 120,
    cyan: 180,
    blue: 240,
    magenta: 300
  }
  const hueRotateValue = Number.isNaN(color) ? cssColorWheel[color as CSSColors] - YELLOW_DISCOUNT : color
  const filter = `hue-rotate(${hueRotateValue}) saturate(${saturate})`

  return (
    <figure
      className={styles.wrapper}
      ref={waveRef}
      style={{
        top,
        filter
      }}
    >
      <img
        className={styles.wave}
        src="https://res.cloudinary.com/otaner/image/upload/v1676929254/cupcake/wave-default.svg"
        alt="Wave"
        srcSet="https://res.cloudinary.com/otaner/image/upload/v1676929254/cupcake/wave-default.svg 1920w, https://res.cloudinary.com/otaner/image/upload/v1676917351/cupcake/wave-large.svg 3000w"
        sizes="(max-width: 2560px) 1920px, (min-width: 2561px) 3000px"
      />
    </figure>
  )
}
