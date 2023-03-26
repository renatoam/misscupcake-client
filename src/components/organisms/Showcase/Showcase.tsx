import { Button, Typography, Wrapper } from '@/components/atoms'
import { Image } from '@/components/molecules'
import LazyLoader from '@/components/pages/HomePage/lazy'
import { Link } from 'react-router-dom'
import styles from './Showcase.module.scss'
import { ShowcaseProps } from './ShowcaseProps'
 
function Showcase(props: ShowcaseProps) {  
  return (
    <Wrapper className={styles.showcase}>
      {props.products?.map((product: any) => {
        return (
          <Wrapper key={product.id} className={styles.showcase__card}>
            <Link to={`/product/${product.id}`}>
              <Image
                src={product.images[0]}
                alt={product.name}
                width={225}
                height={245}
                server
              />
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
