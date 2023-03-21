import styles from './Typography.module.scss'
import { TypographyProps } from './TypographyProps'
 
export default function Typography(props: TypographyProps) {
  const { element: Element, className, children, ...rest } = props
  
  return (
    <Element className={`${styles.typography} ${styles[Element]} ${className}`} {...rest}>
      {children}
    </Element>
  )
}
