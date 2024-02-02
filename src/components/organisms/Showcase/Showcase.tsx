import { Wrapper } from '@/components/atoms'
import ProductCard from '../ProductCard'
import styles from './Showcase.module.scss'
import { ServerProduct, ShowcaseProps } from './ShowcaseProps'
import { useAddToCartController } from '@/app/features/addToCart/useAddToCartController'
 
function Showcase(props: Readonly<ShowcaseProps>) {
  const { addToCart, isLoading } = useAddToCartController()

  return (
    <Wrapper className={styles.showcase} aria-label="Products showcase">
      {props.products?.map((product: ServerProduct) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            loading={isLoading}
            handleClick={addToCart}
          />
        )
      })}
    </Wrapper>
  )
}

export default Showcase
