import { lazy, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from '../../atoms/Container/Container';
import styles from "./HomePage.module.scss";
import LazyLoader from "./lazy";

const Featured = lazy(() => import('./temporary'))

export default function HomePage() {
  const [open, setOpen] = useState(false)
  const [blur, setBlur] = useState({
    avif: 'w_430/e_blur:1000,q_1,f_avif/',
    webp: 'w_430/e_blur:1000,q_1,f_webp/',
    png: 'w_430/e_blur:1000,q_1,f_png/',
  })
  const location = useLocation()

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Container className={styles.header__container}>
          <nav className={styles.menu}>
            <section
              role="button"
              className={styles.menu__trigger}
              onClick={() => setOpen(!open)}
            >
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="7" width="24" height="6" fill="none" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><rect x="8" y="21" width="32" height="6" fill="none" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><rect x="8" y="35" width="18" height="6" fill="none" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </section>
            <ul className={`${styles.menu__links} ${open ? styles['open'] : ''}`}>
              <li
                id="home"
                className={`${styles.menu__item} ${location.pathname === '/' ? styles['active'] : ''}`}
              >
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 25L11.1711 40.6283C11.4421 41.4471 12.2074 42 13.0699 42H34.9301C35.7926 42 36.5579 41.4471 36.8289 40.6283L42 25" stroke="#333" strokeWidth="4"/><path d="M11.4071 25.1228H6.31652C6.14171 25.1228 5.99963 24.9803 6.00362 24.8055C6.16392 17.7822 11.6341 11.8858 19 10H29C36.0773 12.036 41.8233 17.9578 41.996 24.8057C42.0004 24.9804 41.8583 25.1228 41.6835 25.1228H36.5929C34.2767 25.1228 32.0393 25.9636 30.2964 27.4891C26.6917 30.6441 21.3083 30.6441 17.7036 27.4891C15.9607 25.9636 13.7233 25.1228 11.4071 25.1228Z" fill="#642C99" stroke="#642C99" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.1 10C19.0344 9.67689 19 9.34247 19 9C19 6.23858 21.2386 4 24 4C26.7614 4 29 6.23858 29 9C29 9.34247 28.9656 9.67689 28.9 10" stroke="#642C99" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p>Home</p></li>
              <li
                id="shop"
                className={`${styles.menu__item} ${location.pathname === '/shop' ? 'active' : ''}`}
              >Shop</li>
              <li
                id="story"
                className={`${styles.menu__item} ${location.pathname === '/story' ? 'active' : ''}`}>Our story</li>
              <li
                id="why"
                className={`${styles.menu__item} ${location.pathname === '/why' ? 'active' : ''}`}>Why Miss Cupcake</li>
            </ul>
          </nav>
          <figure role="button" className={styles.header__cart}>
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20.5" cy="41.5" r="3.5" fill="#333"/><circle cx="37.5" cy="41.5" r="3.5" fill="#333"/><path d="M5 6L14 12L19 34H39L44 17H25" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M25 26L32.2727 26L41 26" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </figure>
        </Container>
      </header>
      <section role="banner" className={styles.hero}>
        <Container className={styles.hero__container}>
          <section className={styles.hero__text}>
            <h1 className={styles.hero__title}>Miss<br />Cupcake</h1>
            <p className={styles.hero__description}>We are proud to offer cupcakes and cakes that are freshly baked within hours, if not minutes, for your enjoyment.</p>
            <button className={styles.hero__button}>Shop now</button>
          </section>
          <figure className={styles.hero__image}>
            <picture onLoad={() => setBlur({ avif: '', webp: '', png: '' })}>
              <source srcSet={`https://res.cloudinary.com/otaner/image/upload/cupcake/hero-image-mob-avif.avif 600w, https://res.cloudinary.com/otaner/image/upload/cupcake/hero-image-tab-avif.avif 960w, https://res.cloudinary.com/otaner/image/upload/cupcake/hero-image-desk-avif.avif 1600w`} sizes="(max-width: 600px) 600px, (max-width: 1024px) 960px,(min-width: 1025px) 1600px" type="image/avif" />
              <source srcSet={`https://res.cloudinary.com/otaner/image/upload/cupcake/hero-image-mob-webp.webp 600w, https://res.cloudinary.com/otaner/image/upload/cupcake/hero-image-tab-webp.webp 960w, https://res.cloudinary.com/otaner/image/upload/cupcake/hero-image-desk-webp.webp 1600w`} sizes="(max-width: 600px) 600px, (max-width: 1024px) 960px,(min-width: 1025px) 1600px" type="image/webp" />
              <img src={`https://res.cloudinary.com/otaner/image/upload/${blur.png}cupcake/hero-image-desk-png.png`} alt="Cupcakes falling" width={530} height={710} />
            </picture>
          </figure>
        </Container>
      </section>

      <section className={styles.why}>
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
          <section className={styles.why__text}>
            <h2 className={styles.why__title}>The Simple,<br />Sweet Life</h2>
            <p className={styles.why__description}>Our cupcakes are always made with the finest ingredients, creating a spark that makes your taste buds dance. You'll want to indulge in each and every decadent flavor.</p>
            <button className={styles.why__button}>Why Miss Cupcake</button>
          </section>
        </Container>
      </section>

      <LazyLoader>
        <Featured />
      </LazyLoader>
    </main>
  )
}
