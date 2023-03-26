import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { PropsWithChildren } from 'react'
import styles from './Icon.module.scss'
import { IconProps } from './IconProps'
 
export default function Icon(props: PropsWithChildren<IconProps>) {
  const { className = '', label, icon, onClick, children } = props

  const iconButtonProps = onClick ? {
    role: 'button',
    onClick
  } : {}
  
  const content = icon ?
    <FontAwesomeIcon icon={icon} className={styles.icon} /> :
    children

  return (
    <i
      aria-label="icon"
      className={`${styles['icon-button']} ${className}`}
      {...iconButtonProps}
    >
      <AccessibleIcon.Root label={label}>
        {content}
      </AccessibleIcon.Root>
    </i>
  )
}
