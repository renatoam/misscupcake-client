import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import NavItem from "./NavItem"

describe('NavItem', () => {
  it('should be in the document', () => {
    render(<NavItem />)
    expect(screen.queryByRole('listitem')).toBeInTheDocument()
  })
  
  it('should have a link if a href is provided', () => {
    render(<NavItem href="/test" />, { wrapper: BrowserRouter })
    expect(screen.queryByRole('link')).toBeInTheDocument()
  })
  
  it('should not have a link if no href is provided', () => {
    render(<NavItem />)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
