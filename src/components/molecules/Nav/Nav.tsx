import List from '../../atoms/List'
import Wrapper from '../../atoms/Wrapper'
import styles from './Nav.module.scss'
import { NavProps } from './NavProps'
 
export default function Nav(props: NavProps) {
  const { className, role, children } = props
  
  return (
    <Wrapper element="nav" role={role || 'navigation'} className={styles.nav}>
      <List element="menu" aria-label="navigation list" className={`${styles.nav__list} ${className}`}>
        {children}
      </List>
    </Wrapper>
  )
}
