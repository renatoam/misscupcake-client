import styles from './Button.module.scss'
import { ButtonProps } from './ButtonProps'
 
export default function Button(props: ButtonProps) {
  const { className = '', children, ...rest } = props
  
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  )
}
