import { Container, Typography, Wrapper } from '@/components/atoms'
import { Showcase } from '@/components/organisms'
import styles from './Featured.module.scss'
 
export default function Featured({ products }: any) {
  
  return (
    <Wrapper className={styles.featured}>
      <Container className={styles.featured__container}>
        <Typography element="h2">Make your day a little sweeter</Typography>
        <Showcase products={products} />
      </Container>
    </Wrapper>
  )
}
