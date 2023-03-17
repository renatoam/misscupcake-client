import styles from './Wrapper.module.scss'
import { WrapperProps } from './WrapperProps'
 
export default function Wrapper(props: WrapperProps) {
  const { element: Element, className, children } = props
  
  return (
    <Element className={`${styles.wrapper} ${className}`}>
      {children}
    </Element>
  )
}
