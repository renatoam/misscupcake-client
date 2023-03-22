import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Wrapper from "./Wrapper"

describe('Wrapper', () => {
  it('should be in the document', () => {
    render(<Wrapper element="section" role="banner" />)
    expect(screen.queryByRole('banner')).toBeInTheDocument()
  })
  
  it('should have the right tag name', () => {
    render(<Wrapper element="section" role="banner" />)
    expect(screen.queryByRole('banner')?.tagName.toLowerCase()).toBe('section')
  })
  
  it('should have the proper children', () => {
    const content = 'Children Component'
    const children = <p>{content}</p>
    render(<Wrapper element="section" role="banner" children={children} />)
    const sut = screen.queryByText(content)
    expect(sut?.textContent).toBe(content)
  })
})
