import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface IconProps {
  className?: string
  label: string
  icon?: IconDefinition
  onClick?: React.MouseEventHandler<HTMLElement>
}
