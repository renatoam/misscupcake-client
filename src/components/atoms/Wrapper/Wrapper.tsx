import styles from './Wrapper.module.scss'
import { WrapperProps } from './WrapperProps'

export default function Wrapper(props: WrapperProps) {
  const { element: Element = 'section', className, children, ...rest } = props
  
  return (
    <Element className={`${styles.wrapper} ${className}`} {...rest}>
      {children}
    </Element>
  )
}
