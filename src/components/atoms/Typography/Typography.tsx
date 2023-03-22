import { PropsWithChildren } from 'react'
import styles from './Typography.module.scss'
import { TypographyProps } from './TypographyProps'
 
export default function Typography(props: PropsWithChildren<TypographyProps>) {
  const {
    element: Element,
    className,
    children,
    contentEditable = false,
    onBlur,
    ...rest
  } = props
  
  return (
    <Element
      contentEditable={contentEditable}
      onBlur={onBlur}
      className={`${styles.typography} ${styles[Element]} ${className}`}
      {...rest}
    >
      {children}
    </Element>
  )
}
