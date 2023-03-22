import { PropsWithChildren } from 'react'
import Wrapper from '../Wrapper'
import styles from './Nav.module.scss'
import { NavProps } from './NavProps'
 
export default function Nav(props: PropsWithChildren<NavProps>) {
  const { className, role, children } = props
  
  return (
    <Wrapper element="nav" role={role || 'navigation'}>
      <Wrapper element="ul" className={`${styles.ul} ${className}`}>
        {children}
      </Wrapper>
    </Wrapper>
  )
}
