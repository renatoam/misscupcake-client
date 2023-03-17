import { WithChildren } from "@/protocols/common";

export interface WrapperProps extends WithChildren {
  element: keyof HTMLElementTagNameMap
  className?: string
}
