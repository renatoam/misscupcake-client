import { Container, Typography, Wrapper } from '@/components/atoms';
import { Header } from '@/components/organisms';
import { useEditContext } from '@/contexts/EditContext';
import { Fragment, lazy, useState } from "react";
import styles from "./HomePage.module.scss";
import LazyLoader from "./lazy";

const Featured = lazy(() => import('./temporary'))

export default function HomePage() {
  const { editable } = useEditContext()

  const [blur, setBlur] = useState({
    avif: 'w_430/e_blur:1000,q_1,f_avif/',
    webp: 'w_430/e_blur:1000,q_1,f_webp/',
    png: 'w_430/e_blur:1000,q_1,f_png/',
  })

  // controlar todos os items/estados editáveis com useReducer - talvez criar um context
  // configurar capacidade de edição somente pra admins
  const [content, setContent] = useState('We are proud to offer cupcakes and cakes that are freshly baked within hours, if not minutes, for your enjoyment.')

  function handleEditing(event: any) {
    setContent(event.target.textContent)
  }

  const Wrapping = editable ? 'div' : Fragment
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
            >
              <Wrapping {...wrappingProps}>
                {content}
              </Wrapping>
            </Typography>

            <button className={styles.hero__button}>Shop now</button>
          </Wrapper>
          <figure className={styles.hero__image}>
            <picture onLoad={() => setBlur({ avif: '', webp: '', png: '' })}>
              <source srcSet={`https://res.cloudinary.com/otaner/image/upload/cupcake/hero-image-mob-avif.avif 600w, https://res.cloudinary.com/otaner/image/upload/cupcake/hero-image-tab-avif.avif 960w, https://res.cloudinary.com/otaner/image/upload/cupcake/hero-image-desk-avif.avif 1600w`} sizes="(max-width: 600px) 600px, (max-width: 1024px) 960px,(min-width: 1025px) 1600px" type="image/avif" />
              <source srcSet={`https://res.cloudinary.com/otaner/image/upload/cupcake/hero-image-mob-webp.webp 600w, https://res.cloudinary.com/otaner/image/upload/cupcake/hero-image-tab-webp.webp 960w, https://res.cloudinary.com/otaner/image/upload/cupcake/hero-image-desk-webp.webp 1600w`} sizes="(max-width: 600px) 600px, (max-width: 1024px) 960px,(min-width: 1025px) 1600px" type="image/webp" />
              <img src={`https://res.cloudinary.com/otaner/image/upload/${blur.png}cupcake/hero-image-desk-png.png`} alt="Cupcakes falling" width={530} height={710} />
            </picture>
          </figure>
        </Container>
      </Wrapper>

      <Wrapper className={styles.why}>
        <Container className={styles.why__container}>
          <figure className={styles.why__image}>
            <img
              onLoad={() => setBlur({ avif: '', webp: '', png: '' })}
              src={`https://res.cloudinary.com/otaner/image/upload/${blur.avif}cupcake/split-cupcake-desk-avif.avif`}
              alt="Split cupcake"
              loading="lazy"
              width={430}
              height={530}
              decoding="async"
            />
          </figure>
          <Wrapper className={styles.why__text}>
            <Typography element="h2" className={styles.why__title}>The Simple,<br />Sweet Life</Typography>
            <Typography element="p" className={styles.why__description}>Our cupcakes are always made with the finest ingredients, creating a spark that makes your taste buds dance. You'll want to indulge in each and every decadent flavor.</Typography>
            <button className={styles.why__button}>Why Miss Cupcake</button>
          </Wrapper>
        </Container>
      </Wrapper>

      <LazyLoader>
        <Featured />
      </LazyLoader>
    </Wrapper>
  )
}
