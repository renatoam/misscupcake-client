import * as Switch from "@radix-ui/react-switch";
import { useQuery } from "react-query";
import axios from 'axios'
import styles from "./HomePage.module.scss"
import { AlignLeftTwo, CakeFour, ShoppingCartOne } from "@icon-park/react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

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
    <>
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
    </>
  )
}
