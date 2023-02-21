import * as Switch from "@radix-ui/react-switch";
import { useQuery } from "react-query";
import axios from 'axios'
import styles from "./HomePage.module.scss"
import { AlignLeftTwo, CakeFour, ShoppingCartOne } from "@icon-park/react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Wave from "../../atoms/Wave/Wave";

export default function HomePage() {
  // const { data: response, isLoading } = useQuery('products', async () => await axios.get('http://localhost:3001/api/products '))
  const { data, isLoading } = useQuery('homeProducts', async () => {
    const response = await axios.get('https://cupcake.cyclic.app/api/products')
    const homeProducts = response.data.filter((product: any) => product.product_price[0].price === 3)

    return homeProducts
  })

  const [open, setOpen] = useState(false)
  const location = useLocation()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.menu}>
          <section
            role="button"
            className={styles.menu__trigger}
            onClick={() => setOpen(!open)}
          >
            <AlignLeftTwo />
          </section>
          <ul className={`${styles.menu__links} ${open ? styles['open'] : ''}`}>
            <li
              id="home"
              className={`${styles.menu__item} ${location.pathname === '/' ? styles['active'] : ''}`}
            >
              <CakeFour theme="multi-color" fill={['#642C99' ,'#642C99' ,'#FBFACA' ,'#FBFACA']}/>
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
          <ShoppingCartOne />
        </figure>
      </header>

      <section role="banner" className={styles.hero}>
        <section className={styles.hero__text}>
          <h1 className={styles.hero__title}>Miss<br />Cupcake</h1>
          <p className={styles.hero__description}>We are proud to offer cupcakes and cakes that are freshly baked within hours, if not minutes, for your enjoyment.</p>
          <button className={styles.hero__button}>Shop now</button>
        </section>
        <figure className={styles.hero__image}>
          {/* Criar um componente que receba um array de objetos (source) e cujo srcSet prop seja um array de objetos tambem
            A base url deve ser dinâmica
          */}
          <picture>
            <source srcSet="https://res.cloudinary.com/otaner/image/upload/v1676911831/cupcake/hero-image-mob-avif.avif 600w, https://res.cloudinary.com/otaner/image/upload/v1676907341/cupcake/hero-image-tab-avif.avif 960w, https://res.cloudinary.com/otaner/image/upload/v1676907341/cupcake/hero-image-desk-avif.avif 1600w" sizes="(max-width: 600px) 600px, (max-width: 1024px) 960px,(min-width: 1025px) 1600px" type="image/avif" />
            <source srcSet="https://res.cloudinary.com/otaner/image/upload/v1676911831/cupcake/hero-image-mob-webp.webp 600w, https://res.cloudinary.com/otaner/image/upload/v1676907341/cupcake/hero-image-tab-webp.webp 960w, https://res.cloudinary.com/otaner/image/upload/v1676907341/cupcake/hero-image-desk-webp.webp 1600w" sizes="(max-width: 600px) 600px, (max-width: 1024px) 960px,(min-width: 1025px) 1600px" type="image/webp" />
            <img src="https://res.cloudinary.com/otaner/image/upload/v1676911831/cupcake/hero-image-desk-png.png" alt="Cupcakes falling" />
          </picture>
        </figure>
      </section>
      <Wave />

      <section className={styles.why}>
        <h2 className={styles.why__title}>The Simple,<br />Sweet Life</h2>
        <p className={styles.why__description}>Our cupcakes are always made with the finest ingredients, creating a spark that makes your taste buds dance. You'll want to indulge in each and every decadent flavor.</p>
        <button className={styles.why__button}>Why Miss Cupcake</button>
      </section>

      <section className={styles.products}>
        {data?.map((product: any) => {
          return (
            <section key={product.id} className={styles.product}>
              <Link to={`/product/${product.id}`}>
                <figure className={styles.product__image}>
                  <img src={product.product_image[0].image_url} alt={product.name} />
                </figure>
                <h2>{product.name}</h2>
                <p
                  className={styles.product__description}
                  title={product.description} 
                >
                  {product.description}
                </p>
              </Link>
              <section className={styles.actions}>
                <section className={styles.controls}>
                  <button>-</button>
                  <input type="number" defaultValue={10} />
                  <button>+</button>
                </section>
                <button className={styles.cta}>Add to Cart</button>
              </section>
            </section>
          )
        })}
      </section>
    </main>
  )
}
