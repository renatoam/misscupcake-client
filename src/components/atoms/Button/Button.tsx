import styles from './Button.module.scss'
import { ButtonProps } from './ButtonProps'
 
export default function Button(props: ButtonProps) {
  const { className = '', children, variant, ...rest } = props
  const variations = !variant || variant === 'default' ? '' : styles[variant]
  
  return (
    <button className={`${styles.button} ${variations} ${className}`} {...rest}>
      {children}
    </button>
  )
}
