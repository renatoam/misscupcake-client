import { Wrapper } from '@/components/atoms'
import ProductCard from '../ProductCard'
import styles from './Showcase.module.scss'
import { ServerProduct, ShowcaseProps } from './ShowcaseProps'
 
function Showcase(props: ShowcaseProps) {  
  return (
    <Wrapper className={styles.showcase} aria-label="Products showcase">
      {props.products?.map((product: ServerProduct) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            image={product.images[0]}
          />
        )
      })}
    </Wrapper>
  )
}

export default Showcase
