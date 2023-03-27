import { Wrapper } from '@/components/atoms'
import LazyLoader from '@/components/pages/HomePage/lazy'
import ProductCard from '../ProductCard'
import styles from './Showcase.module.scss'
import { ShowcaseProps } from './ShowcaseProps'
 
function Showcase(props: ShowcaseProps) {  
  return (
    <Wrapper className={styles.showcase}>
      {props.products?.map((product: any) => {
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

export default LazyLoader<ShowcaseProps>(Showcase)
