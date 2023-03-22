import { PropsWithChildren } from 'react'
import styles from './Wrapper.module.scss'
import { WrapperProps } from './WrapperProps'
 
export default function Wrapper(props: PropsWithChildren<WrapperProps>) {
  const { element: Element, className, children } = props
  
  return (
    <Element className={`${styles.wrapper} ${className}`}>
      {children}
    </Element>
  )
}
