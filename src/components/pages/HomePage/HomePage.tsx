import { Button, Container, Typography, Wrapper } from '@/components/atoms';
import { Image } from '@/components/molecules';
import { Header } from '@/components/organisms';
import Showcase from '@/components/organisms/Showcase';
import { heroFallback, sources } from '@/constants/images';
import { useEditContext } from '@/contexts/EditContext';
import { useState } from "react";
import { useHomePage } from './HomePage.context';
import styles from "./HomePage.module.scss";
import LazyLoader from './lazy';

export default function HomePage() {
  const { editable } = useEditContext()
  const { products } = useHomePage()

  console.log({ products })

  // controlar todos os items/estados editáveis com useReducer - talvez criar um context
  // configurar capacidade de edição somente pra admins
  const [content, setContent] = useState('We are proud to offer cupcakes and cakes that are freshly baked within hours, if not minutes, for your enjoyment.')

  function handleEditing(event: any) {
    setContent(event.target.textContent)
  }

  const wrappingProps = editable && { style: { border: editable ? '1px solid' : '' } }

  return (
    <Wrapper element="main" className={styles.main}>
      <Header />
      <Wrapper role="banner" className={styles.hero}>
        <Container className={styles.hero__container}>
          <Wrapper className={styles.hero__text}>
            <Typography element="h1" className={styles.hero__title}>Miss<br />Cupcake</Typography>
            <Typography
              contentEditable={editable}
              onBlur={handleEditing}
              element="p"
              className={styles.hero__description}
              {...wrappingProps}
            >
              {content}
            </Typography>
            <Button className={styles.hero__button}>Shop now</Button>
          </Wrapper>
          <Image
            sources={sources}
            src={heroFallback.src}
            alt={heroFallback.alt}
            width={530}
            height={710}
            figureProps={{ className: styles.hero__image }}
            blurOptions="none"
          />
        </Container>
      </Wrapper>
      <Wrapper className={styles.why}>
        <Container className={styles.why__container}>
          <Image
            src="cupcake/split-cupcake-desk-avif.avif"
            alt="Split cupcake"
            width={430}
            height={530}
            figureProps={{ className: styles.why__image }}
            type="avif"
          />
          <Wrapper className={styles.why__text}>
            <Typography element="h2" className={styles.why__title}>The Simple,<br />Sweet Life</Typography>
            <Typography element="p" className={styles.why__description}>Our cupcakes are always made with the finest ingredients, creating a spark that makes your taste buds dance. You'll want to indulge in each and every decadent flavor.</Typography>
            <Button className={styles.why__button}>Why Miss Cupcake</Button>
          </Wrapper>
        </Container>
      </Wrapper>
      <LazyLoader>
        <Wrapper className={styles.featured}>
          <Container className={styles.featured__container}>
            <Typography element="h2">Make your day a little sweeter</Typography>
            <Showcase products={products} />
          </Container>
        </Wrapper>
      </LazyLoader>
    </Wrapper>
  )
}
