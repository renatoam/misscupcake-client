import styles from './Nav.module.scss'
import { NavProps } from './NavProps'
 
export default function Nav(props: NavProps) {
  const { className, role, children } = props
  
  return (
    <nav role={role || 'navigation'}>
      <ul className={`${styles.ul} ${className}`}>
        {children}
      </ul>
    </nav>
  )
}
