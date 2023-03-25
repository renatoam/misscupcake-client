import { Button, Typography, Wrapper } from '@/components/atoms'
import LazyLoader from '@/components/pages/HomePage/lazy'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Showcase.module.scss'
import { ShowcaseProps } from './ShowcaseProps'
 
function Showcase(props: ShowcaseProps) {
  const { products } = props

  const [placeholder, setPlaceholder] = useState('loading')

  function handleLoad() {
    setPlaceholder('')
  }
  
  return (
    <Wrapper className={styles.showcase}>
      {products?.map((product: any) => {
        return (
          <Wrapper key={product.id} className={styles.showcase__card}>
            <Link to={`/product/${product.id}`}>
              <Wrapper element="figure" className={`${styles[placeholder]} ${styles.showcase__image}`}>
                <Wrapper element="div" className={`${styles['placeholder']} ${styles[placeholder]}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322.391 322.391"><path d="M161.196 32.608c-74.742 0-135.333 60.591-135.333 135.333H296.53c-.001-74.742-60.591-135.333-135.334-135.333z" fill="#F7CFDA"/><path d="M238.917 322.391H83.476a31.62 31.62 0 0 1-29.774-20.982L18.61 175.156h285.173L268.69 301.408c-4.493 12.583-16.413 20.983-29.773 20.983z" fill="#a046f5"/><path d="M282.576 162.594H39.815c-16.446 0-29.902-13.456-29.902-29.902h0c0-16.446 13.456-29.902 29.902-29.902h242.76c16.446 0 29.902 13.456 29.902 29.902h0c0 16.446-13.456 29.902-29.901 29.902z" fill="#F7CFDA"/><g fill="#a046f5"><circle cx="119.197" cy="41.001" r="24"/><circle cx="161.196" cy="28" r="28"/><circle cx="203.196" cy="41.001" r="24"/></g><g fill="#F7CFDA"><circle cx="47.21" cy="173.103" r="31.75"/><circle cx="104.203" cy="173.103" r="31.75"/><circle cx="161.196" cy="173.103" r="31.75"/><circle cx="218.189" cy="173.103" r="31.75"/><circle cx="275.181" cy="173.103" r="31.75"/></g></svg>
                </Wrapper>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  width={225}
                  height={245}
                  onLoad={handleLoad}
                />
              </Wrapper>
              <Typography element="h2">{product.name}</Typography>
              <Typography element="p"
                className={styles.showcase__description}
                title={product.description} 
              >
                {product.description}
              </Typography>
            </Link>
            <Wrapper element="section" className={styles.actions}>
              <Wrapper element="section" className={styles.controls}>
                <Button variant="text">-</Button>
                <input type="number" defaultValue={10} />
                <Button variant="text">+</Button>
              </Wrapper>
              <Button>Add to Cart</Button>
            </Wrapper>
          </Wrapper>
        )
      })}
    </Wrapper>
  )
}

export default LazyLoader<ShowcaseProps>(Showcase)
