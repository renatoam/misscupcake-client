import { Button, Typography, Wrapper } from '@/components/atoms'
import { Image } from '@/components/molecules'
import { Link } from 'react-router-dom'
import QuantityControl from '../QuantityControl'
import styles from './ProductCard.module.scss'
import { ProductCardProps } from './ProductCardProps'
 
export default function ProductCard(props: ProductCardProps) {
  const {
    id,
    image,
    name,
    description,
  } = props
  
  return (
    <Wrapper
      className={styles.card}
      aria-labelledby="productName"
      aria-describedby="productDescription"
      role="article"
    >
      <Link to={`/product/${id}`}>
        <Image
          src={image}
          alt={name}
          width={225}
          height={245}
          server
          figureProps={{ className: styles.card__image }}
        />
        <Typography element="h2" id="productName">{name}</Typography>
        <Typography element="p"
          className={styles.card__description}
          title={description}
          id="productDescription"
          aria-label="Product description"
        >
          {description}
        </Typography>
      </Link>
      <Wrapper element="section" className={styles.card__actions}>
        <QuantityControl />
        <Button aria-label="add">Add to Cart</Button>
      </Wrapper>
    </Wrapper>
  )
}
