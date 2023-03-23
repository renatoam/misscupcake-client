import styles from './ListItem.module.scss'
import { ListItemProps } from './ListItemProps'
 
export default function ListItem(props: ListItemProps) {
  const { className, children, ...rest } = props
  
  return (
    <li className={`${styles.list__item} ${className}`} {...rest}>
      {children}
    </li>
  )
}
