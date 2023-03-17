import Container from '@/components/atoms/Container/Container';
import Icon from '@/components/atoms/Icon/Icon';
import Nav from '@/components/atoms/Nav/Nav';
import NavItem from '@/components/atoms/NavItem';
import Wrapper from '@/components/atoms/Wrapper';
import { links } from '@/constants/navigation';
import { faBars, faCartShopping, faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import * as Menu from '@radix-ui/react-navigation-menu';
import { useState } from 'react';
import styles from './Header.module.scss';
 
export default function Header() {
  const [open, setOpen] = useState(false)

  function handleMenu() {
    setOpen(!open)
  }

  function isActive(link: string) {
    return location.pathname === link ? styles['active'] : ''
  }

  return (
    <Wrapper element="header" className={styles.header}>
      <Container className={styles.header__container}>
        <Menu.Root className={styles.menu}>
          <Icon
            icon={faBars}
            label="menu"
            onClick={handleMenu}
            className={styles.menu__trigger}
          />
          <Nav className={`${styles.menu__links} ${open ? styles['open'] : ''}`}>
            {links.map((item, index) => {
              return (
                <NavItem
                  key={item.id}
                  href={item.link}
                  className={`${styles.menu__item} ${isActive(item.link)}`}
                >
                  {index === 0 ? (
                    <>
                      <Icon
                        label="home"
                        icon={faHouseChimneyWindow}
                      />
                      <p>{item.text}</p>
                    </>
                  ) : item.text}
                </NavItem>
              )
            })}
          </Nav>
        </Menu.Root>
        <Icon
          label="cart"
          icon={faCartShopping}
          className={styles.header__cart}
          onClick={() => {}}
        />
      </Container>
    </Wrapper>
  )
}
