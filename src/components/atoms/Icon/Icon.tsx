import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import styles from './Icon.module.scss'
import { IconProps } from './IconProps'
 
export default function Icon(props: IconProps) {
  const { className = '', label, icon, onClick } = props
  const iconButtonProps = onClick ? {
    role: 'button',
    onClick
  } : {}

  return (
    <i
      aria-label="icon"
      className={`${styles['icon-button']} ${className}`}
      {...iconButtonProps}
    >
      <AccessibleIcon.Root label={label}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </AccessibleIcon.Root>
    </i>
  )
}
