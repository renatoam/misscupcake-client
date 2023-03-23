import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Nav from "./Nav";

describe('Nav', () => {
  it('should render proper children', () => {
    const children = "new kids on the block"
    render(<Nav children={children} />)
    const sut = screen.getByLabelText('navigation list')
    expect(sut.textContent).toBe(children)
  })
  
  it('should have navigation role if any other is assigned', () => {
    render(<Nav children={'children'} />)
    const sut = screen.getByRole('navigation')
    expect(sut).toBeInTheDocument()
  })
  
  it('should not have navigation role if any other is assigned', () => {
    render(<Nav role="banner" children={'children'} />)
    const sut = screen.queryByRole('navigation')
    expect(sut).not.toBeInTheDocument()
  })
})