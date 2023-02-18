import * as Switch from "@radix-ui/react-switch";
import { useQuery } from "react-query";
import axios from 'axios'
import styles from "./Home.module.scss"
import { AlignLeftTwo, CakeFour, ShoppingCartOne } from "@icon-park/react";

export default function HomePage() {
  // const { data: response, isLoading } = useQuery('products', async () => await axios.get('http://localhost:3001/api/products '))
  const { data, isLoading } = useQuery('homeProducts', async () => {
    const response = await axios.get('https://cupcake.cyclic.app/api/products')
    const homeProducts = response.data.filter((product: any) => product.product_price[0].price === 3)

    return homeProducts
  })

  if (isLoading) return <h1>Loading...</h1>

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.menu}>
          <section role="button" className={styles.menu__trigger}>
            <AlignLeftTwo />
          </section>
          <ul className={styles.menu__links}>
            <li className={styles.menu__item}>
              <CakeFour theme="multi-color" size="24" fill={['#642C99' ,'#642C99' ,'#FBFACA' ,'#FBFACA']}/>
              <p>Home</p>
            </li>
            <li>Shop</li>
            <li>Our story</li>
            <li>Why Miss Cupcake</li>
          </ul>
        </nav>
        <figure role="button" className={styles.header__cart}>
          <ShoppingCartOne />
        </figure>
      </header>


      <h1>Home Page</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label className={styles.Label} htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
          Airplane mode
        </label>
        <Switch.Root className={styles.SwitchRoot} id="airplane-mode">
          <Switch.Thumb className={styles.SwitchThumb} />
        </Switch.Root>
      </div>
      <ul>
        <li>Radix UI</li>
        <li>Sass</li>
        <li>CSS (Sass) Modules</li>
      </ul>
      <section className={styles.products}>
        {data?.map((product: any) => {
          return (
            <section key={product.id} className={styles.product}>
              <figure>
                <img src={product.product_image[0].image_url} alt={product.name} />
              </figure>
              <h2>{product.name}</h2>
              <p className={styles.product__description}>{product.description}</p>
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
