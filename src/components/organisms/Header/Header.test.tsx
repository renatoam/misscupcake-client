import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe('Header', () => {
  const Wrapper = ({ children }: any) => (
    <BrowserRouter>
      <section aria-label="wrapper">{children}</section>
    </BrowserRouter>
  )
  
  it('should be in the document', () => {
    render(<Header />, { wrapper: Wrapper })
    const sut = screen.queryByLabelText('wrapper')?.firstElementChild

    expect(sut).toBeInTheDocument()
  })
  
  it('should have menu as child', () => {
    render(<Header />, { wrapper: Wrapper })
    const sut = within(screen.queryByLabelText('wrapper')!).queryByRole('menubar')

    expect(sut).toBeInTheDocument()
  })
  
  it('should have cart icon as child', () => {
    render(<Header />, { wrapper: Wrapper })
    const sut = within(screen.queryByLabelText('wrapper')!).queryByText('cart')

    expect(sut).toBeInTheDocument()
  })
})