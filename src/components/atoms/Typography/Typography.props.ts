import { FocusEventHandler } from "react"

export interface TypographyProps extends Partial<NativeText> {
  element: keyof Pick<HTMLElementTagNameMap, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span'>
  className?: string
  title?: string
  contentEditable?: boolean | "inherit"
  onBlur?: CustomBlur
  variant?: 'title-1' |
  'title-2' |
  'title-3' |
  'title-4' |
  'title-5' |
  'title-6' |
  'subtitle' |
  'body-large' |
  'body-normal' |
  'body-small' |
  'body-tiny' |
  'label' |
  'value' |
  'message-title' |
  'message-body'
}

export type CustomBlur = FocusEventHandler<HTMLHeadingElement> &
  FocusEventHandler<HTMLLabelElement> &
  FocusEventHandler<HTMLParagraphElement> &
  FocusEventHandler<HTMLSpanElement>
