import { PropsWithChildren } from 'react'
import styles from './Typography.module.scss'
import { TypographyProps } from './Typography.props'
 
export default function Typography(props: PropsWithChildren<TypographyProps>) {
  const {
    element: Element = 'p',
    className,
    children,
    contentEditable = false,
    onBlur,
    variant = 'body-normal',
    ...rest
  } = props
  
  return (
    <Element
      contentEditable={contentEditable}
      onBlur={onBlur}
      className={`${styles.typography} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Element>
  )
}
