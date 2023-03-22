import { PropsWithChildren } from 'react'
import styles from './Wrapper.module.scss'
import { HTMLGenericAttributes, WrapperProps } from './WrapperProps'

export default function Wrapper(props: PropsWithChildren<WrapperProps>) {
  const { element: Element, className, children, ...rest } = props
  
  return (
    <Element className={`${styles.wrapper} ${className}`} {...rest as HTMLGenericAttributes}>
      {children}
    </Element>
  )
}
