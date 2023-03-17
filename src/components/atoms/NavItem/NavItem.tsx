import { Link } from 'react-router-dom'
import styles from './NavItem.module.scss'
import { NavItemProps } from './NavItemProps'
 
export default function NavItem(props: NavItemProps) {
  const { href = '', className, children } = props
  const Wrapping = href ? Link : 'span'
  
  return (
    <li className={`${styles.nav__item} ${className}`}>
      <Wrapping
        to={href}
        className={href ? styles['nav__link'] : styles['nav__text']}
      >
        {children}
      </Wrapping>
    </li>
  )
}
