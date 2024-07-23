import { Button, Container, Typography, Wrapper } from '@/components/atoms';
import { Image } from '@/components/molecules';
import { Header } from '@/components/organisms';
import { heroFallback, sources } from '@/constants/images';
import { useEditContext } from '@/contexts/EditContext';
import { lazy } from 'react';
import { useHomePage } from './HomePage.context';
import styles from "./HomePage.module.scss";
import LazyLoader from './lazy';
// import { useActiveCart } from '@/app/cart/main/activeCart.container';

const Featured = lazy(() => import('./fragments/Featured'))

export default function HomePage() {
  const { editable } = useEditContext()
  const { products, content, mutation } = useHomePage()
  
  // we don't need this hook here because home loading is independent of it
  // const { cart, error, isLoading } = useActiveCart()

  const heroContent = content?.sections?.find((sec: any) => {
    return sec.name === 'hero'
  })
  const hero = heroContent?.elements?.reduce((acc: any, element: any) => {
    return {
      ...acc,
      [element.name]: element.content
    }
  }, {})

  function handleEditing(event: any) {
    mutation.mutate({
      page: "home",
      section: "hero",
      description: event.target.textContent
    })
  }

  const wrappingProps = editable && { style: { border: editable ? '1px solid' : '' } }

  return (
    <Wrapper element="main" className="p-6 bg-gradient-to-b from-pink from-60% to-lime to-50%">
      <Header />
      <Wrapper element="header" className="mx-auto max-w-[2300px]">
        <Container className="grid gap-9 pt-16 grid-cols-[repeat(auto-fit,minmax(30rem,1fr))]">
          <Wrapper className="pt-20">
            <Typography element="h1" className="mb-16 leading-tight text-[clamp(3.2rem,5vw+.1rem,12rem)]">{hero?.title.split(' ')[0]}<br />{hero?.title.split(' ')[1]}</Typography>
            <Typography
              contentEditable={editable}
              onBlur={handleEditing}
              element="p"
              className={styles.hero__description}
              {...wrappingProps}
            >
              {hero?.description}
            </Typography>
            <Button className="grid my-16 min-w-96 place-content-center">Shop now</Button>
          </Wrapper>
          <Image
            sources={sources}
            src={heroFallback.src}
            alt={heroFallback.alt}
            width={530}
            height={710}
            className="max-[37.5em]:h-auto max-[37.5em]:ml-auto max-[37.5em]:w-4/5"
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
            // this style is for setting a blurred placeholder for the image
            // this is a different method other than using the Cloudinary (or other CDN) method
            style={{
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundImage: 'url(blurred url here)' // TO DO: https://csswizardry.com/2023/09/the-ultimate-lqip-lcp-technique/
              // https://www.youtube.com/watch?v=345V2MU3E_w
            }}
          />
          <Wrapper className={styles.why__text}>
            <Typography element="h2" className={styles.why__title}>The Simple,<br />Sweet Life</Typography>
            <Typography element="p" className={styles.why__description}>Our cupcakes are always made with the finest ingredients, creating a spark that makes your taste buds dance. You'll want to indulge in each and every decadent flavor.</Typography>
            <Button className={styles.why__button}>Why Miss Cupcake</Button>
          </Wrapper>
        </Container>
      </Wrapper>
      <LazyLoader>
        <Featured products={products} />
      </LazyLoader>
    </Wrapper>
  )
}
