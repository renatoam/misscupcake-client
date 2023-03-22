import { Icon, Nav, NavItem, Typography } from '@/components/atoms';
import { links } from '@/constants/navigation';
import { faBars, faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import * as Menu from '@radix-ui/react-navigation-menu';
import { useState } from 'react';
import styles from './MainMenu.module.scss';
 
export default function MainMenu() {
  const [open, setOpen] = useState(false)

  function handleMenu() {
    setOpen(!open)
  }

  function isActive(link: string) {
    return location.pathname === link ? styles['active'] : ''
  }
  
  return (
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
              <Typography element="span">
                {index > 0 ? item.text : (
                  <>
                    <Icon
                      label="home"
                      icon={faHouseChimneyWindow}
                    />
                    {item.text}
                  </>
                  )
                }
              </Typography>
            </NavItem>
          )
        })}
      </Nav>
    </Menu.Root>
  )
}
