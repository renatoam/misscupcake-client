import { Button, Typography, Wrapper } from '@/components/atoms'
import { Image } from '@/components/molecules'
import { Link } from 'react-router-dom'
import QuantityControl from '../QuantityControl'
import styles from './ProductCard.module.scss'
import { ProductCardProps } from './ProductCardProps'
import { ChangeEvent, useCallback, useState } from 'react'
 
export default function ProductCard(props: Readonly<ProductCardProps>) {
  const {
    id,
    image,
    name,
    description,
    loading,
    handleClick
  } = props

  const [value, setValue] = useState(1)

  const handleButtonClick = useCallback(() => {
    handleClick(id, value)
  }, [id, value])

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    let newValue = Number((event.target as HTMLInputElement).value)

    if (newValue < 0 || Number.isNaN(newValue)) {
      newValue = 0
    }

    if (newValue > 99) newValue = 99

    setValue(newValue)
  }, [setValue])

  const handleIncrease = useCallback(() => {
    setValue(value => value < 99 ? value + 1 : 99)
  }, [setValue])
  
  const handleDecrease = useCallback(() => {
    setValue(value => value > 0 ? value - 1 : value)
  }, [setValue])
  
  return (
    <Wrapper
      className={styles.card}
      aria-labelledby="productName"
      aria-describedby="productDescription"
      element="article"
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
        <QuantityControl
          handleChange={handleChange}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          inputProps={{ value }}
        />
        <Button onClick={handleButtonClick} aria-label="add">
          {loading ? <div className={styles.loader} /> : 'Add to Cart'}
        </Button>
      </Wrapper>
    </Wrapper>
  )
}
