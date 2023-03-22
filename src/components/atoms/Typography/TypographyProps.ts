import { FocusEventHandler } from "react"

export interface TypographyProps {
  element: keyof Pick<HTMLElementTagNameMap, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span' | 'textarea'>
  className?: string
  title?: string
  contentEditable?: boolean | "inherit"
  onBlur?: CustomBlur
}

export type CustomBlur = FocusEventHandler<HTMLHeadingElement> &
  FocusEventHandler<HTMLLabelElement> &
  FocusEventHandler<HTMLParagraphElement> &
  FocusEventHandler<HTMLSpanElement> &
  FocusEventHandler<HTMLTextAreaElement>
