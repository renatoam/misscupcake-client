import { HTMLAttributes } from "react"

export interface WrapperProps extends NativeElement {
  element: keyof HTMLElementTagNameMap
}

export type HTMLGenericAttributes = HTMLAttributes<HTMLElement>
