import styles from './List.module.scss'
import { ListProps } from './ListProps'
 
export default function List(props: ListProps) {
  const { element: Element = 'ul', className, children, ...rest } = props
  
  return (
    <Element className={`${styles.list} ${className}`} {...rest}>
      {children}
    </Element>
  )
}
