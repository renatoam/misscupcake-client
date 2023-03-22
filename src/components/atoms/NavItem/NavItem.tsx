import { Fragment, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper'
import styles from './NavItem.module.scss'
import { NavItemProps } from './NavItemProps'
 
export default function NavItem(props: PropsWithChildren<NavItemProps>) {
  const { href = '', className, children } = props
  const Wrapping = href ? Link : Fragment
  
  return (
    <Wrapper element="li" role="listitem" className={`${styles.nav__item} ${className}`}>
      <Wrapping
        to={href}
        className={href && styles['nav__link']}
        role={href && 'link'}
      >
        {children}
      </Wrapping>
    </Wrapper>
  )
}