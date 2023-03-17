import { WithChildren } from '@/protocols/common';

export interface NavProps extends WithChildren {
  className?: string
  role?: React.AriaRole
}
