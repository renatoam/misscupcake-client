import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import ListItem from '../../atoms/ListItem'
import styles from './NavItem.module.scss'
import { NavItemProps } from './NavItemProps'
 
export default function NavItem(props: NavItemProps) {
  const { to = '', className, children, ...rest } = props
  const Wrapping = to ? Link : Fragment
  
  return (
    <ListItem className={`${styles.nav__item} ${className}`}>
      <Wrapping
        to={to}
        className={to && styles['nav__link']}
        role={to && 'link'}
        {...rest}
      >
        {children}
      </Wrapping>
    </ListItem>
  )
}
