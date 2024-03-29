import { Icon, Typography } from '@/components/atoms';
import { Nav, NavItem } from '@/components/molecules';
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
    <Menu.Root className={styles.menu} role="menubar">
      <Icon
        icon={faBars}
        label="menu"
        onClick={handleMenu}
        className={styles.menu__trigger}
      />
      <Nav role={open ? "menu" : ''} className={`${styles.menu__links} ${open ? styles['open'] : ''}`}>
        {links.map((item, index) => {
          return (
            <NavItem
              key={item.id}
              to={item.link}
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
