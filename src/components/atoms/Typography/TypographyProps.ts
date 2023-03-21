import { WithChildren } from "@/protocols/common";

export interface TypographyProps extends WithChildren {
  element: keyof Pick<HTMLElementTagNameMap, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span' | 'textarea'>
  className?: string
  title?: string
}
